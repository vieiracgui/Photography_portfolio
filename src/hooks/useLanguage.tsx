import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import type { Language } from '@/types/portfolio';

const STORAGE_KEY = 'portfolio-lang';

interface LanguageContextValue {
  readonly lang: Language;
  readonly toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Language {
  if (typeof window === 'undefined') return 'pt';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'pt' || stored === 'en') return stored;
  } catch {
    // localStorage indisponível: segue no padrão.
  }

  return 'pt';
}

/** Guarda o idioma escolhido e o disponibiliza para o site inteiro. */
export function LanguageProvider({ children }: { readonly children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Sem persistência: o idioma ainda vale nesta sessão.
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'));
  }, []);

  const value = useMemo(() => ({ lang, toggleLang }), [lang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage precisa estar dentro de <LanguageProvider> (veja main.tsx).');
  }
  return context;
}
