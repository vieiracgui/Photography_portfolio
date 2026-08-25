/**
 * Tipos do portfólio.
 * Tudo que você edita em src/content/ é validado por estes tipos:
 * se faltar um campo obrigatório, o VS Code avisa em vermelho na hora.
 */

export type ThemeMode = 'light' | 'dark';

/** Idiomas disponíveis no site. */
export type Language = 'pt' | 'en';

/**
 * Formato de recorte da capa na grade:
 * - 'random'    → o site sorteia um formato para o projeto (padrão)
 * - 'auto'      → mantém a proporção original da foto, sem recorte
 * - 'square'    → quadrado
 * - 'portrait'  → em pé (4:5)
 * - 'tall'      → em pé, mais alto (3:4)
 * - 'landscape' → deitado (4:3)
 * - 'wide'      → deitado, bem largo (16:10)
 */
export type CoverAspect = 'random' | 'auto' | 'square' | 'portrait' | 'tall' | 'landscape' | 'wide';

export interface ProjectImage {
  /** Caminho a partir de /public. Ex.: "/images/meu-trabalho.jpg" */
  readonly src: string;
  /** Descrição da imagem para leitores de tela e SEO. Obrigatória. */
  readonly alt: string;
  /** Legenda opcional exibida abaixo da imagem na página do projeto. */
  readonly caption?: string;
  /** Recorte da capa na grade. Se omitido, o site sorteia um formato. */
  readonly aspect?: CoverAspect;
}

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  /** Identificador na URL: /projeto/sonhos-cromaticos */
  readonly slug: string;
  readonly title: string;
  /** Categoria única — vira um filtro no topo da página. */
  readonly category: string;
  readonly year: number;
  /** Palavras-chave exibidas como #hashtag no card. */
  readonly tags: readonly string[];
  /** Imagem de capa exibida na grade. */
  readonly cover: ProjectImage;
  /** Uma linha de resumo, usada na página do projeto e no SEO. */
  readonly excerpt: string;
  /** Um item do array = um parágrafo do texto do projeto. */
  readonly description: readonly string[];
  /** Versões em inglês (opcionais). Sem elas, o site mostra o português. */
  readonly titleEn?: string;
  readonly excerptEn?: string;
  readonly descriptionEn?: readonly string[];
  readonly client?: string;
  readonly role?: string;
  /** Imagens extras exibidas na página do projeto. */
  readonly gallery?: readonly ProjectImage[];
  readonly externalUrl?: ProjectLink;
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly heroLine: string;
  readonly heroSupport: string;
  readonly about: readonly string[];
  readonly services: readonly string[];
  readonly email: string;
  readonly socials: readonly SocialLink[];
  readonly seo: {
    readonly title: string;
    readonly description: string;
    readonly url: string;
  };
}

export interface AdjacentProjects {
  readonly previous: Project | null;
  readonly next: Project | null;
}
