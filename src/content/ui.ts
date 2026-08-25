import type { Language } from "@/types/portfolio";

/**
 * Textos fixos da interface, nos dois idiomas.
 * Para ajustar qualquer rótulo do site, edite aqui.
 */
export const ui = {
  pt: {
    navWorks: "Trabalhos",
    navAbout: "Sobre mim",
    navContact: "Contato",
    aboutTitle: "Sobre mim",
    contactTitle: "Contato",
    allWorks: "Todos os trabalhos",
    previous: "Anterior",
    next: "Próximo",
    year: "Ano",
    category: "Categoria",
    client: "Cliente",
    role: "Atuação",
    notFoundTag: "Erro 404",
    notFoundTitle: "Este endereço não existe",
    notFoundText:
      "O link pode estar quebrado ou o álbum pode ter mudado de nome.",
    backHome: "Voltar para o início",
    imageMissing: "Imagem não encontrada",
    openAlbum: "Abrir álbum",
    switchLang: "Switch to English",
    themeToLight: "Mudar para o tema claro",
    themeToDark: "Mudar para o tema escuro",
  },
  en: {
    navWorks: "works",
    navAbout: "about me",
    navContact: "contact",
    aboutTitle: "About me",
    contactTitle: "Contact",
    allWorks: "All works",
    previous: "Previous",
    next: "Next",
    year: "Year",
    category: "Category",
    client: "Client",
    role: "Role",
    notFoundTag: "Error 404",
    notFoundTitle: "This page does not exist",
    notFoundText: "The link may be broken or the album may have been renamed.",
    backHome: "Back to home",
    imageMissing: "Image not found",
    openAlbum: "Open album",
    switchLang: "Mudar para português",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
  },
} as const satisfies Record<Language, Record<string, string>>;
