import { cn } from '@/lib/cn';

interface FilterBarProps {
  readonly categories: readonly string[];
  readonly activeFilter: string;
  readonly onSelect: (filter: string) => void;
  readonly resultCount: number;
}

export function FilterBar({ categories, activeFilter, onSelect, resultCount }: FilterBarProps) {
  return (
    <div className="sticky top-16 z-30 border-b border-line/70 bg-canvas/85 backdrop-blur-md md:top-20">
      <div className="shell flex items-center gap-4 py-3">
        <div
          role="group"
          aria-label="Filtrar projetos por categoria"
          className="-mx-1 flex flex-1 items-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((category) => {
            const isActive = category === activeFilter;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelect(category)}
                aria-pressed={isActive}
                className={cn(
                  'shrink-0 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-all duration-300',
                  isActive
                    ? 'bg-ink text-canvas'
                    : 'text-ink-soft hover:bg-ink/5 hover:text-ink dark:hover:bg-ink/10',
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="hidden shrink-0 text-sm text-ink-faint tabular-nums sm:block">
          {resultCount} {resultCount === 1 ? 'projeto' : 'projetos'}
        </p>
      </div>
    </div>
  );
}
