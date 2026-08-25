import type { ThemeMode } from '@/types/portfolio';

interface ThemeToggleProps {
  readonly theme: ThemeMode;
  readonly onToggle: () => void;
}

/** Botão de tema claro/escuro. */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Mudar para o tema claro' : 'Mudar para o tema escuro';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-ink-soft transition-colors duration-300 hover:bg-ink/5 hover:text-ink dark:hover:bg-ink/10"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="12" y1="2.5" x2="12" y2="4.8" />
            <line x1="12" y1="19.2" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="4.8" y2="12" />
            <line x1="19.2" y1="12" x2="21.5" y2="12" />
            <line x1="5.2" y1="5.2" x2="6.8" y2="6.8" />
            <line x1="17.2" y1="17.2" x2="18.8" y2="18.8" />
            <line x1="18.8" y1="5.2" x2="17.2" y2="6.8" />
            <line x1="6.8" y1="17.2" x2="5.2" y2="18.8" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
          <path
            d="M20 13.6A8.4 8.4 0 0 1 10.4 4a8.4 8.4 0 1 0 9.6 9.6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
