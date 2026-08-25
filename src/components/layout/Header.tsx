import { Link } from 'react-router-dom';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const t = ui[lang];

  const navItems = [
    { label: t.navWorks, href: '/#trabalhos' },
    { label: t.navAbout, href: '/#sobre' },
    { label: t.navContact, href: '/#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="font-display text-xl leading-none tracking-tight transition-opacity hover:opacity-70 md:text-2xl"
        >
          {site[lang].name}
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <nav aria-label="Navegação principal" className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão de idioma: mostra o idioma para o qual o clique leva. */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.switchLang}
            title={t.switchLang}
            className="grid h-9 min-w-9 place-items-center rounded-full px-2 text-xs font-medium tracking-[0.12em] text-ink-soft uppercase transition-colors duration-300 hover:bg-ink/5 hover:text-ink dark:hover:bg-ink/10"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
