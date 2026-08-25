import type { AdjacentProjects, Project } from '@/types/portfolio';

/** Valor do filtro que mostra todos os projetos. */
export const ALL_FILTER = 'tudo';

export interface ProjectImageEntry {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly isCover: boolean;
}

/**
 * Lista de filtros: "tudo" + cada categoria usada nos projetos,
 * na ordem em que aparecem em src/content/projects.ts.
 */
export function getCategories(projects: readonly Project[]): readonly string[] {
  const seen = new Set<string>();
  const categories: string[] = [];

  for (const project of projects) {
    const category = project.category.trim();
    if (!category || seen.has(category)) continue;
    seen.add(category);
    categories.push(category);
  }

  return [ALL_FILTER, ...categories];
}

/** Filtra por categoria. `ALL_FILTER` devolve a lista inteira. */
export function filterProjects(projects: readonly Project[], filter: string): readonly Project[] {
  if (filter === ALL_FILTER) return projects;
  return projects.filter((project) => project.category === filter);
}

export function findProjectBySlug(projects: readonly Project[], slug: string): Project | null {
  return projects.find((project) => project.slug === slug) ?? null;
}

/** Projeto anterior e próximo, para a navegação no fim da página do projeto. */
export function getAdjacentProjects(projects: readonly Project[], slug: string): AdjacentProjects {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}

/** Todas as imagens de um projeto (capa + galeria), sem repetir caminhos. */
export function getProjectImages(project: Project): readonly ProjectImageEntry[] {
  const entries: ProjectImageEntry[] = [{ ...project.cover, isCover: true }];
  const seen = new Set<string>([project.cover.src]);

  for (const image of project.gallery ?? []) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    entries.push({ ...image, isCover: false });
  }

  return entries;
}
