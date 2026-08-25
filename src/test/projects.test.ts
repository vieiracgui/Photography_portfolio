import { describe, expect, it } from 'vitest';

import { projects } from '@/content/projects';
import {
  ALL_FILTER,
  filterProjects,
  findProjectBySlug,
  getAdjacentProjects,
  getCategories,
  getProjectImages,
} from '@/lib/projects';
import type { Project } from '@/types/portfolio';

function makeProject(overrides: Partial<Project> & Pick<Project, 'slug' | 'category'>): Project {
  return {
    title: 'Título',
    year: 2025,
    tags: ['tag'],
    cover: { src: '/images/exemplo-01.svg', alt: 'Capa' },
    excerpt: 'Resumo.',
    description: ['Parágrafo.'],
    ...overrides,
  };
}

describe('getCategories', () => {
  it('começa por "tudo" e não repete categorias', () => {
    const list = [
      makeProject({ slug: 'a', category: 'ilustração' }),
      makeProject({ slug: 'b', category: 'abstrato' }),
      makeProject({ slug: 'c', category: 'ilustração' }),
    ];

    expect(getCategories(list)).toEqual([ALL_FILTER, 'ilustração', 'abstrato']);
  });

  it('devolve apenas "tudo" quando não há projetos', () => {
    expect(getCategories([])).toEqual([ALL_FILTER]);
  });
});

describe('filterProjects', () => {
  const list = [
    makeProject({ slug: 'a', category: 'ilustração' }),
    makeProject({ slug: 'b', category: 'abstrato' }),
  ];

  it('devolve tudo no filtro padrão', () => {
    expect(filterProjects(list, ALL_FILTER)).toHaveLength(2);
  });

  it('filtra por categoria', () => {
    expect(filterProjects(list, 'abstrato').map((item) => item.slug)).toEqual(['b']);
  });

  it('devolve lista vazia para categoria inexistente', () => {
    expect(filterProjects(list, 'fotografia')).toHaveLength(0);
  });
});

describe('findProjectBySlug', () => {
  it('encontra o projeto', () => {
    const list = [makeProject({ slug: 'meu-projeto', category: 'ilustração' })];
    expect(findProjectBySlug(list, 'meu-projeto')?.slug).toBe('meu-projeto');
  });

  it('devolve null quando o slug não existe', () => {
    expect(findProjectBySlug([], 'inexistente')).toBeNull();
  });
});

describe('getAdjacentProjects', () => {
  const list = [
    makeProject({ slug: 'a', category: 'x' }),
    makeProject({ slug: 'b', category: 'x' }),
    makeProject({ slug: 'c', category: 'x' }),
  ];

  it('devolve anterior e próximo no meio da lista', () => {
    const { previous, next } = getAdjacentProjects(list, 'b');
    expect(previous?.slug).toBe('a');
    expect(next?.slug).toBe('c');
  });

  it('não tem anterior no primeiro item nem próximo no último', () => {
    expect(getAdjacentProjects(list, 'a').previous).toBeNull();
    expect(getAdjacentProjects(list, 'c').next).toBeNull();
  });
});

describe('getProjectImages', () => {
  it('coloca a capa primeiro e ignora duplicatas da galeria', () => {
    const project = makeProject({
      slug: 'a',
      category: 'x',
      cover: { src: '/images/capa.svg', alt: 'Capa' },
      gallery: [
        { src: '/images/capa.svg', alt: 'Capa repetida' },
        { src: '/images/extra.svg', alt: 'Extra' },
      ],
    });

    const images = getProjectImages(project);
    expect(images.map((image) => image.src)).toEqual(['/images/capa.svg', '/images/extra.svg']);
    expect(images[0]?.isCover).toBe(true);
  });
});

describe('conteúdo real do portfólio', () => {
  it('não repete slugs', () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('usa slugs em minúsculas, sem espaço e sem acento', () => {
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('exige texto alternativo em todas as imagens', () => {
    for (const project of projects) {
      expect(project.cover.alt.trim().length).toBeGreaterThan(0);
      for (const image of project.gallery ?? []) {
        expect(image.alt.trim().length).toBeGreaterThan(0);
      }
    }
  });
});

describe('coverAspectClass', () => {
  it('mantém o formato original quando aspect é "auto"', async () => {
    const { coverAspectClass } = await import('@/lib/aspect');
    const project = makeProject({
      slug: 'a',
      category: 'x',
      cover: { src: '/images/exemplo-01.svg', alt: 'Capa', aspect: 'auto' },
    });
    expect(coverAspectClass(project)).toBeNull();
  });

  it('respeita um formato definido manualmente', async () => {
    const { coverAspectClass } = await import('@/lib/aspect');
    const project = makeProject({
      slug: 'a',
      category: 'x',
      cover: { src: '/images/exemplo-01.svg', alt: 'Capa', aspect: 'wide' },
    });
    expect(coverAspectClass(project)).toBe('aspect-[16/10]');
  });

  it('sorteio é estável: mesmo slug devolve sempre o mesmo formato', async () => {
    const { coverAspectClass } = await import('@/lib/aspect');
    const project = makeProject({ slug: 'feicon-em-foco', category: 'x' });
    expect(coverAspectClass(project)).toBe(coverAspectClass(project));
    expect(coverAspectClass(project)).toMatch(/^aspect-/);
  });
});
