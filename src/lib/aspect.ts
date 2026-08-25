import type { CoverAspect, Project } from '@/types/portfolio';

/**
 * Classes de proporção usadas no recorte da capa.
 * (Os nomes precisam estar escritos por extenso para o Tailwind gerá-los.)
 */
const ASPECT_CLASS: Record<Exclude<CoverAspect, 'random' | 'auto'>, string> = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/10]',
};

/**
 * Sequência do sorteio: mais formatos em pé porque mosaico
 * fica melhor assim, com quadrados e paisagens intercalados.
 */
const RANDOM_POOL: readonly (keyof typeof ASPECT_CLASS)[] = [
  'portrait',
  'square',
  'tall',
  'landscape',
  'portrait',
  'wide',
  'square',
];

/** Transforma o slug em um número estável (mesmo slug → mesmo formato sempre). */
function hashSlug(slug: string): number {
  let hash = 0;
  for (let index = 0; index < slug.length; index += 1) {
    hash = (hash * 31 + slug.charCodeAt(index)) >>> 0;
  }
  return hash;
}

/**
 * Decide o recorte da capa de um projeto na grade.
 * Devolve a classe CSS de proporção, ou null para manter a foto no formato original.
 */
export function coverAspectClass(project: Project): string | null {
  const aspect: CoverAspect = project.cover.aspect ?? 'random';

  if (aspect === 'auto') return null;

  if (aspect === 'random') {
    const pick = RANDOM_POOL[hashSlug(project.slug) % RANDOM_POOL.length] ?? 'portrait';
    return ASPECT_CLASS[pick];
  }

  return ASPECT_CLASS[aspect];
}
