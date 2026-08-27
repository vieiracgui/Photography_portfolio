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
    role: "Marketing, conteúdo e desenvolvimento",
    location: "São Paulo, Brasil",
    heroLine: "Estratégia, imagem e código no mesmo lugar",
    heroSupport:
      "Trabalho com marketing, produção de conteúdo e fotografia — e construo na web o que precisa existir para as ideias saírem do papel. Abaixo, alguns registros e os trabalhos que já entreguei.",
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
    skills: [
      {
        title: "Marketing e growth",
        items: [
          { name: "Planejamento e execução de campanhas", level: "advanced" },
          { name: "Social media e calendário editorial", level: "advanced" },
          {
            name: "CRM, automação e programas de fidelidade",
            level: "advanced",
          },
          { name: "Coordenação de influenciadores", level: "intermediate" },
          { name: "Google Ads e Meta Business Suite", level: "intermediate" },
        ],
      },
      {
        title: "Conteúdo e design",
        items: [
          { name: "Fotografia", level: "advanced" },
          {
            name: "Direção criativa e captação de vídeo",
            level: "intermediate",
          },
          { name: "Adobe Photoshop", level: "intermediate" },
          { name: "Adobe Illustrator", level: "intermediate" },
          { name: "Premiere e CapCut", level: "intermediate" },
          { name: "Figma", level: "basic" },
        ],
      },
      {
        title: "Dados e análise",
        items: [
          { name: "Excel", level: "advanced" },
          { name: "Power BI", level: "intermediate" },
          { name: "Google Analytics", level: "intermediate" },
        ],
      },
      {
        title: "Desenvolvimento web",
        items: [
          { name: "HTML e CSS", level: "intermediate" },
          { name: "JavaScript", level: "basic" },
          { name: "React e Tailwind", level: "basic" },
          { name: "Python", level: "basic" },
          { name: "PHP, Node.js e Spring Boot", level: "basic" },
        ],
      },
      {
        title: "Infraestrutura e ferramentas",
        items: [
          { name: "Git e GitHub", level: "intermediate" },
          { name: "Linux", level: "intermediate" },
          { name: "AWS e Google Cloud", level: "basic" },
          { name: "Trello e Notion", level: "intermediate" },
        ],
      },
    ],
    email: "contato.guilhermevieira31@gmail.com",
    // 👉 Coloque o PDF em public/ com o nome cv.pdf. Apague a linha para esconder o botão.
    cvUrl: "/cv.pdf",
    socials: [
      { label: "Instagram", url: "https://instagram.com/seuusuario" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/vieiracgui" },
      { label: "GitHub", url: "https://github.com/vieiracgui" },
    ],
    seo: {
      title: "Guilherme Vieira ",
      description:
        "Espaço pessoal de fotografia: cores, lugares, objetos e cenas do cotidiano.",
      url: "https://seu-site.netlify.app",
    },
  },
  en: {
    name: "Guilherme Vieira",
    role: "Marketing, content and development",
    location: "São Paulo, Brazil",
    heroLine: "Strategy, image and code in one place",
    heroSupport:
      "I work with marketing, content production and photography — and I build on the web whatever needs to exist to bring ideas to life. Below, some records and the work I have delivered.",
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
    skills: [
      {
        title: "Marketing and growth",
        items: [
          { name: "Campaign planning and execution", level: "advanced" },
          { name: "Social media and editorial calendar", level: "advanced" },
          { name: "CRM, automation and loyalty programs", level: "advanced" },
          { name: "Influencer coordination", level: "intermediate" },
          { name: "Google Ads and Meta Business Suite", level: "intermediate" },
        ],
      },
      {
        title: "Content and design",
        items: [
          { name: "Photography", level: "advanced" },
          {
            name: "Creative direction and video shooting",
            level: "intermediate",
          },
          { name: "Adobe Photoshop", level: "intermediate" },
          { name: "Adobe Illustrator", level: "intermediate" },
          { name: "Premiere and CapCut", level: "intermediate" },
          { name: "Figma", level: "basic" },
        ],
      },
      {
        title: "Data and analytics",
        items: [
          { name: "Excel", level: "advanced" },
          { name: "Power BI", level: "intermediate" },
          { name: "Google Analytics", level: "intermediate" },
        ],
      },
      {
        title: "Web development",
        items: [
          { name: "HTML and CSS", level: "intermediate" },
          { name: "JavaScript", level: "basic" },
          { name: "React and Tailwind", level: "basic" },
          { name: "Python", level: "basic" },
          { name: "PHP, Node.js and Spring Boot", level: "basic" },
        ],
      },
      {
        title: "Infrastructure and tools",
        items: [
          { name: "Git and GitHub", level: "intermediate" },
          { name: "Linux", level: "intermediate" },
          { name: "AWS and Google Cloud", level: "basic" },
          { name: "Trello and Notion", level: "intermediate" },
        ],
      },
    ],
    email: "contato.guilhermevieira31@gmail.com",
    // 👉 Coloque o PDF em public/ com o nome cv.pdf. Apague a linha para esconder o botão.
    cvUrl: "/cv.pdf",
    socials: [
      { label: "Instagram", url: "https://instagram.com/seuusuario" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/vieiracgui" },
      { label: "GitHub", url: "https://github.com/vieiracgui" },
    ],
    seo: {
      title: "Guilherme Vieira — Photography",
      description:
        "Personal photography space: colors, places, objects and everyday scenes.",
      url: "https://seu-site.netlify.app",
    },
  },
};
