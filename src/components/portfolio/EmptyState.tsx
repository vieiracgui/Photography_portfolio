interface EmptyStateProps {
  readonly filter: string;
  readonly onReset: () => void;
}

export function EmptyState({ filter, onReset }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-line py-24 text-center">
      <p className="font-display text-title">Nada em “{filter}” por enquanto</p>
      <p className="mx-auto mt-3 max-w-sm text-sm text-ink-soft">
        Assim que você publicar um projeto nesta categoria, ele aparece aqui.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full border border-ink px-6 py-2.5 text-sm transition-colors duration-300 hover:bg-ink hover:text-canvas"
      >
        Ver tudo
      </button>
    </div>
  );
}
