import type { Language } from '@/types/portfolio';

/**
 * Textos fixos da interface, nos dois idiomas.
 * Para ajustar qualquer rótulo do site, edite aqui.
 */
export const ui = {
  pt: {
    navWorks: 'Trabalhos',
    navSkills: 'Competências',
    navAbout: 'Sobre mim',
    navContact: 'Contato',
    aboutTitle: 'Sobre mim',
    heroGreeting: 'Olá, eu sou',
    contactCta: 'Entre em contato',
    downloadCv: 'Baixar currículo',
    worksTitle: 'Trabalhos',
    worksIntro:
      'Álbuns de fotografia — registros de eventos, exposições, viagens e do cotidiano.',
    skillsTitle: 'Competências',
    skillsIntro:
      'Ferramentas e áreas em que atuo — do planejamento de campanhas à produção de imagem, com desenvolvimento web como extensão natural do que faço.',
    contactTitle: 'Contato',
    allWorks: 'Todos os trabalhos',
    previous: 'Anterior',
    next: 'Próximo',
    year: 'Ano',
    category: 'Categoria',
    client: 'Cliente',
    role: 'Atuação',
    notFoundTag: 'Erro 404',
    notFoundTitle: 'Este endereço não existe',
    notFoundText: 'O link pode estar quebrado ou o álbum pode ter mudado de nome.',
    backHome: 'Voltar para o início',
    imageMissing: 'Imagem não encontrada',
    openAlbum: 'Abrir álbum',
    switchLang: 'Switch to English',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
    levels: {
      basic: 'Básico',
      intermediate: 'Intermediário',
      advanced: 'Avançado',
    },
  },
  en: {
    navWorks: 'Works',
    navSkills: 'Skills',
    navAbout: 'About me',
    navContact: 'Contact',
    aboutTitle: 'About me',
    heroGreeting: 'Hello, I am',
    contactCta: 'Get in touch',
    downloadCv: 'Download CV',
    worksTitle: 'Works',
    worksIntro:
      'Photography albums — records of events, exhibitions, travels and everyday life.',
    skillsTitle: 'Skills',
    skillsIntro:
      'Tools and areas I work with — from campaign planning to image production, with web development as a natural extension of what I do.',
    contactTitle: 'Contact',
    allWorks: 'All works',
    previous: 'Previous',
    next: 'Next',
    year: 'Year',
    category: 'Category',
    client: 'Client',
    role: 'Role',
    notFoundTag: 'Error 404',
    notFoundTitle: 'This page does not exist',
    notFoundText: 'The link may be broken or the album may have been renamed.',
    backHome: 'Back to home',
    imageMissing: 'Image not found',
    openAlbum: 'Open album',
    switchLang: 'Mudar para português',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    levels: {
      basic: 'Basic',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
  },
} as const satisfies Record<Language, Record<string, unknown>>;
