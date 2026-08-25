import type { CSSProperties, ElementType, ReactNode } from 'react';

import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

interface RevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  /** Atraso em milissegundos, para entradas em cascata. */
  readonly delay?: number;
  /** Tag HTML renderizada. Padrão: div. */
  readonly as?: ElementType;
}

/** Envolve qualquer conteúdo com a animação de entrada no scroll. */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <Tag ref={ref} className={cn('reveal', className)} style={style}>
      {children}
    </Tag>
  );
}
