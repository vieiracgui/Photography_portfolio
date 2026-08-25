import { useCallback, useEffect, useState } from 'react';

import type { ThemeMode } from '@/types/portfolio';

const STORAGE_KEY = 'portfolio-theme';

function isThemeMode(value: unknown): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

function readInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isThemeMode(stored)) return stored;
  } catch {
    // localStorage bloqueado (aba anônima, por exemplo): segue no padrão do sistema.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

interface UseThemeResult {
  readonly theme: ThemeMode;
  readonly toggleTheme: () => void;
}

/** Tema claro/escuro persistido no navegador e aplicado como classe no <html>. */
export function useTheme(): UseThemeResult {
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0f0f0e' : '#fcfbf8';

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Sem persistência disponível: o tema ainda funciona nesta sessão.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
