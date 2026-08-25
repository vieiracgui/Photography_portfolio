import type { Project } from "@/types/portfolio";

/**
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  SEUS ÁLBUNS                                                         │
 * │  Cada bloco { ... } é um álbum. A ordem aqui é a ordem no site.      │
 * │  Regra de ouro do src: /images/ + pasta + nome + extensão,           │
 * │  idêntico ao arquivo no disco (jpg ≠ jpeg ≠ png).                    │
 * │  Os campos titleEn / excerptEn / descriptionEn são a versão em       │
 * │  inglês — sem eles, o modo EN mostra o texto em português.           │
 * └──────────────────────────────────────────────────────────────────────┘
 */
export const projects: readonly Project[] = [
  {
    slug: "feicon-em-foco",
    title: "FEICON em Foco: Inovação e Design na Construção",
    category: "eventos",
    year: 2024,
    tags: ["fotografia", "feira", "construção"],
    cover: {
      src: "/images/Tintas MC/TintasMC_capa.jpg",
      alt: "Estande da Tintas MC na FEICON com visitantes circulando pela feira",
    },
    excerpt:
      "Uma seleção de fotos capturadas durante a FEICON, a maior feira da construção civil e arquitetura da América Latina.",
    description: [
      "Este álbum reúne uma seleção de fotos capturadas durante a FEICON, a maior feira da construção civil e arquitetura da América Latina. As imagens foram produzidas a trabalho para a Tintas MC, destacando os estandes, produtos, interações e a atmosfera do evento.",
    ],
    titleEn: "FEICON in Focus: Innovation and Design in Construction",
    excerptEn:
      "A selection of photos captured at FEICON, the largest construction and architecture fair in Latin America.",
    descriptionEn: [
      "This album gathers a selection of photos captured at FEICON, the largest civil construction and architecture fair in Latin America. The images were produced for Tintas MC, highlighting the booths, products, interactions and the atmosphere of the event.",
    ],
    gallery: [
      {
        src: "/images/Tintas MC/TintasMC_1.jpg",
        alt: "Fachada do estande da Tintas MC",
      },
      {
        src: "/images/Tintas MC/TintasMC_2.jpg",
        alt: "Latas de tinta em exposição",
      },
      {
        src: "/images/Tintas MC/TintasMC_3.jpeg",
        alt: "Latas de tinta em exposição",
      },
      {
        src: "/images/Tintas MC/TintasMC_4.jpg",
        alt: "Latas de tinta em exposição",
      },
    ],
  },
  {
    slug: "basf-e-as-suas-cores",
    title: "BASF e as suas cores",
    category: "eventos",
    year: 2024,
    tags: ["fotografia", "cores"],
    cover: {
      src: "/images/BASF/BASF capa.jpg",
      alt: "Mural colorido com capacete, fones e formas geométricas no espaço da BASF",
    },
    excerpt:
      "Registros fotográficos da visita à BASF, realizada a trabalho para a Tintas MC.",
    description: [
      "Este álbum apresenta registros fotográficos da visita à BASF, realizada a trabalho para a Tintas MC.",
    ],
    titleEn: "BASF and Its Colors",
    excerptEn:
      "Photographic records of a visit to BASF, made while working for Tintas MC.",
    descriptionEn: [
      "This album presents photographic records of a visit to BASF, made while working for Tintas MC.",
    ],
    gallery: [
      {
        src: "/images/BASF/BASF_1.jpg",
        alt: "cores 1",
      },
      {
        src: "/images/BASF/BASF_2.jpg",
        alt: "cores 2",
      },
      {
        src: "/images/BASF/BASF_3.jpg",
        alt: "cores 3",
      },
      {
        src: "/images/BASF/BASF_4.jpg",
        alt: "cores 4",
      },
      {
        src: "/images/BASF/BASF_5.jpg",
        alt: "cores 5",
      },
    ],
  },
  {
    slug: "nas-cores-de-van-gogh",
    title: "Nas Cores de Van Gogh: Um Registro Visual",
    category: "exposições",
    year: 2024,
    tags: ["fotografia", "arte", "exposição"],
    cover: {
      src: "/images/Van Gogh/vangogh_capa.jpg",
      alt: "Projeção de uma natureza-morta de Van Gogh emoldurada, em tons quentes",
    },
    excerpt:
      "Fotografias capturadas durante a exposição imersiva de Van Gogh: luzes, cores e projeções.",
    description: [
      "Este álbum reúne fotografias capturadas durante a exposição imersiva de Van Gogh, explorando luzes, cores e projeções que trazem à vida as icônicas obras do artista. Cada imagem busca transmitir a atmosfera envolvente da experiência, destacando detalhes que conectam arte e emoção.",
    ],
    titleEn: "In the Colors of Van Gogh: A Visual Record",
    excerptEn:
      "Photographs captured at the immersive Van Gogh exhibition: lights, colors and projections.",
    descriptionEn: [
      "This album gathers photographs captured at the immersive Van Gogh exhibition, exploring the lights, colors and projections that bring the artist's iconic works to life. Each image tries to convey the immersive atmosphere of the experience, highlighting details that connect art and emotion.",
    ],
    gallery: [
      {
        src: "/images/Van Gogh/vangogh_1.jpg",
        alt: "Quadro 1",
      },
      {
        src: "/images/Van Gogh/vangogh_2.jpg",
        alt: "Quadro 2",
      },
      {
        src: "/images/Van Gogh/vangogh_3.jpg",
        alt: "Quadro 3",
      },
    ],
  },
  {
    slug: "summer-in-kiel",
    title: "Summer in Kiel",
    category: "viagens",
    year: 2025,
    tags: ["fotografia", "viagem"],
    cover: {
      src: "/images/Housten Kiel/Kiel_capa.jpg",
      alt: "Porto de Kiel sob o céu de verão",
    },
    excerpt:
      "Um verão à beira do Báltico — luz longa, mar por perto e uma cidade que vive lá fora.",
    description: [
      "Fotos de um verão em Kiel, no norte da Alemanha. Dias que demoram a escurecer, o mar sempre a poucos passos e a cidade inteira do lado de fora: veleiros, calçadões, gente aproveitando cada hora de sol.",
      "Este álbum reúne o que meus olhos guardaram do caminho — cores, detalhes e cenas que talvez só façam sentido para quem estava lá. Ou talvez não.",
    ],
    excerptEn:
      "A summer by the Baltic — long light, the sea nearby and a city that lives outdoors.",
    descriptionEn: [
      "Photos from a summer in Kiel, in northern Germany. Days that take forever to get dark, the sea always a few steps away and the whole city outside: sailboats, promenades, people making the most of every hour of sun.",
      "This album gathers what my eyes kept along the way — colors, details and scenes that may only make sense to someone who was there. Or maybe not.",
    ],
    gallery: [
      {
        src: "/images/Housten Kiel/Kiel_2.jpeg",
        alt: "Kiel 2",
      },
      {
        src: "/images/Housten Kiel/Kiel_3.jpeg",
        alt: "Kiel 3",
      },
      {
        src: "/images/Housten Kiel/Kiel_4.jpeg",
        alt: "Kiel 4",
      },
      {
        src: "/images/Housten Kiel/Kiel_5.jpeg",
        alt: "Kiel 5",
      },
      {
        src: "/images/Housten Kiel/Kiel_6.jpeg",
        alt: "Kiel 6",
      },
      {
        src: "/images/Housten Kiel/Kiel_7.jpeg",
        alt: "Kiel 7",
      },
      {
        src: "/images/Housten Kiel/Kiel_8.jpeg",
        alt: "Kiel 8",
      },
      {
        src: "/images/Housten Kiel/Kiel_9.jpeg",
        alt: "Kiel 9",
      },
    ],
  },
  {
    slug: "paisagens-em-foco",
    title: "Paisagens em foco",
    category: "paisagens",
    year: 2025,
    tags: ["fotografia", "paisagens"],
    cover: {
      src: "/images/Paisagens em foco/Paisagens_capa.jpeg",
      alt: "Paisagem em destaque, capa do álbum",
    },
    excerpt:
      "Beleza em cada detalhe — paisagens naturais e urbanas ao meu redor.",
    description: [
      "Este álbum reúne fotografias de paisagens capturadas em diferentes momentos e lugares, explorando a beleza natural e urbana ao meu redor. Cada imagem busca transmitir a grandiosidade dos cenários, os contrastes de luz e sombra, e a atmosfera única de cada paisagem registrada.",
    ],
    titleEn: "Landscapes in Focus",
    excerptEn:
      "Beauty in every detail — natural and urban landscapes around me.",
    descriptionEn: [
      "This album gathers landscape photographs captured at different moments and places, exploring the natural and urban beauty around me. Each image tries to convey the grandeur of the scenery, the contrasts of light and shadow, and the unique atmosphere of every landscape.",
    ],
    gallery: [
      {
        src: "/images/Paisagens em foco/Paisagens_1.jpg",
        alt: "Paisagem 1",
      },
      {
        src: "/images/Paisagens em foco/Paisagens_2.jpeg",
        alt: "Paisagem 2",
      },
      {
        src: "/images/Paisagens em foco/Paisagens_3.jpeg",
        alt: "Paisagem 3",
      },
      {
        src: "/images/Paisagens em foco/Paisagens_4.jpeg",
        alt: "Paisagem 4",
      },
      {
        src: "/images/Paisagens em foco/Paisagens_5.jpg",
        alt: "Paisagem 5",
      },
      {
        src: "/images/Paisagens em foco/Paisagens_6.jpg",
        alt: "Paisagem 6",
      },
    ],
  },
  {
    slug: "fragmentos-do-cotidiano",
    title: "Fragmentos do cotidiano",
    category: "cotidiano",
    year: 2025,
    tags: ["fotografia", "cotidiano"],
    cover: {
      src: "/images/Fragmentos do cotidiano/Fragmentos capa.jpg",
      alt: "Cena urbana no centro da cidade à noite",
    },
    excerpt:
      "Momentos espontâneos, cenas urbanas e detalhes que muitas vezes passam despercebidos.",
    description: [
      "Este álbum reúne uma seleção de fotos capturadas no dia a dia, explorando momentos espontâneos, cenas urbanas e detalhes que muitas vezes passam despercebidos. Cada imagem busca transformar o ordinário em extraordinário, revelando beleza, contraste e histórias por trás de instantes simples.",
    ],
    titleEn: "Fragments of Everyday Life",
    excerptEn:
      "Spontaneous moments, urban scenes and details that often go unnoticed.",
    descriptionEn: [
      "This album gathers a selection of photos captured in everyday life, exploring spontaneous moments, urban scenes and details that often go unnoticed. Each image tries to turn the ordinary into extraordinary, revealing beauty, contrast and the stories behind simple moments.",
    ],
    gallery: [
      {
        src: "/images/Fragmentos do cotidiano/Fragmentos_1.jpg",
        alt: "Fragmento 1",
      },
      {
        src: "/images/Fragmentos do cotidiano/Fragmentos_2.jpg",
        alt: "Fragmento 2",
      },
      {
        src: "/images/Fragmentos do cotidiano/Fragmentos_3.jpg",
        alt: "Fragmento 3",
      },
      {
        src: "/images/Fragmentos do cotidiano/Fragmentos_4.jpg",
        alt: "Fragmento 4",
      },
      {
        src: "/images/Fragmentos do cotidiano/Fragmentos_5.jpg",
        alt: "Fragmento 5",
      },
    ],
  },
];
