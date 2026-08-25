import type { Language, SiteConfig } from "@/types/portfolio";

/**
 * ┌──────────────────────────────────────────────────────────────┐
 * │  SUAS INFORMAÇÕES — nos dois idiomas                         │
 * │  O bloco pt é o site em português; o bloco en, em inglês.    │
 * │  E-mail e redes valem para os dois (edite nos dois blocos).  │
 * └──────────────────────────────────────────────────────────────┘
 */
export const site: Record<Language, SiteConfig> = {
  pt: {
    name: "Guilherme Vieira",
    role: "Fotografia como passatempo",
    location: "São Paulo, Brasil",
    heroLine: "Pequenos detalhes, do meu ponto de vista",
    heroSupport:
      "Um espaço para as fotos que faço por prazer — cores, lugares e cenas do dia a dia que chamaram minha atenção.",
    about: [
      "Sou profissional de marketing e criador de conteúdo com foco em imagem, narrativa e performance digital. Minha atuação une estratégia e sensibilidade visual, transformando ideias em conteúdos que geram conexão e resultado.",
      "Tenho experiência no planejamento e execução de campanhas, produção de conteúdo para redes sociais e desenvolvimento de identidade visual para marcas. Na fotografia e no vídeo, busco sempre alinhar estética, posicionamento e objetivo estratégico, garantindo que cada imagem comunique algo além do visual.",
      "Atuo desde a concepção da ideia até a publicação final, envolvendo direção criativa, captação, edição e análise de desempenho. Trabalho com organização de processos, calendário editorial e acompanhamento de métricas, garantindo consistência e crescimento.",
      "Utilizo ferramentas como Adobe Photoshop, Illustrator e editores de vídeo profissionais, além de equipamentos próprios para produção de conteúdo. Minha abordagem combina técnica, estratégia e atenção aos detalhes para entregar materiais com identidade e impacto.",
    ],
    services: [
      "Fotografia de rua e do cotidiano",
      "Cores, texturas e detalhes",
      "Lugares e viagens",
      "Experimentos com luz e composição",
    ],
    email: "contato.guilhermevieira31@gmail.com",
    socials: [
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/vieiracgui" },
      { label: "GitHub", url: "https://www.github.com/in/vieiracgui" },
    ],
    seo: {
      title: "Guilherme Vieira — Fotografia",
      description:
        "Espaço pessoal de fotografia: cores, lugares, objetos e cenas do cotidiano.",
      url: "https://seu-site.netlify.app",
    },
  },
  en: {
    name: "Guilherme Vieira",
    role: "Photography as a hobby",
    location: "São Paulo, Brazil",
    heroLine: "Small details, from my point of view",
    heroSupport:
      "A space for the photos I take for pleasure — colors, places and everyday scenes that caught my attention.",
    about: [
      "I am a marketing professional and content creator focused on image, storytelling and digital performance. My work combines strategy and visual sensibility, turning ideas into content that creates connection and results.",
      "I have experience in planning and executing campaigns, producing content for social media and developing visual identities for brands. In photography and video, I always aim to align aesthetics, positioning and strategic goals, making sure every image communicates something beyond the visual.",
      "I work from the initial concept to the final publication, covering creative direction, shooting, editing and performance analysis. I work with process organization, editorial calendars and metrics tracking, ensuring consistency and growth.",
      "I use tools such as Adobe Photoshop, Illustrator and professional video editors, along with my own equipment for content production. My approach combines technique, strategy and attention to detail to deliver materials with identity and impact.",
    ],
    services: [
      "Street and everyday photography",
      "Colors, textures and details",
      "Places and travels",
      "Experiments with light and composition",
    ],
    email: "contato.guilhermevieira31@gmail.com",
    socials: [
      { label: "Instagram", url: "https://instagram.com/seuusuario" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/vieiracgui" },
      { label: "LinkedIn", url: "https://www.Github.com/in/vieiracgui" },
    ],
    seo: {
      title: "Guilherme Vieira — Photography",
      description:
        "Personal photography space: colors, places, objects and everyday scenes.",
      url: "https://seu-site.netlify.app",
    },
  },
};
