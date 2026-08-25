import type { Language, Project } from '@/types/portfolio';

export interface LocalizedProjectText {
  readonly title: string;
  readonly excerpt: string;
  readonly description: readonly string[];
}

/**
 * Devolve título, resumo e descrição no idioma pedido.
 * Se o projeto não tiver a versão em inglês, mostra o português.
 */
export function localizeProject(project: Project, lang: Language): LocalizedProjectText {
  if (lang === 'en') {
    return {
      title: project.titleEn ?? project.title,
      excerpt: project.excerptEn ?? project.excerpt,
      description: project.descriptionEn ?? project.description,
    };
  }

  return {
    title: project.title,
    excerpt: project.excerpt,
    description: project.description,
  };
}
