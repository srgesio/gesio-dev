export interface Experience {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    id: "quality",
    title: "Quality Digital",
    subtitle: "Software Engineer",
    date: "Desde 2022",
    details: [
      "Desenvolvimento de customizações para Ecommerce VTEX IO",
      "Padronização de definições de styleguide.",
      "Aplicação consistente de design system.",
      "Configuração de workflows e definições de processos para release e deploy",
    ],
  },
  {
    id: "metodo",
    title: "Agência Mtd.",
    subtitle: "Software Engineer",
    date: "2021 – 2022",
    details: [
      "Liderança de time de desenvolvimento",
      "Atuação como desenvolvedor dedicado em projeto de Ecommerce VTEX IO",
      "Desenvolvimento e implantação de Ecommerce VTEX IO",
    ],
  },
  {
    id: "vtex",
    title: "VTEX IO Certified Developer",
    date: "Desde 2022",
    details: [],
  },
  {
    id: "tre",
    title: "Tribunal Regional Eleitoral - RN",
    date: "2018 – 2019",
    details: [
      "Desenvolvimento de hotsites para eventos internos",
      "Criação de iconografia de identificação das seções da intranet e portal do RH",
      "Consumo de API de imagens do Flickr para criação de página de galeria interna.",
    ],
  },
  {
    id: "sesap",
    title: "SESAP - RN",
    date: "2020 – 2021",
    details: [
      "Desenvolvimento de hotsites para eventos internos",
      "Desenvolvimento de página interna dos serviços oferecidos",
      "Desenvolvimento do Portal RH interno, um agregador de páginas úteis aos servidores",
    ],
  },
  {
    id: "tads",
    title: "Análise e Desenv. de Sistemas",
    date: "2017 – 2020",
    details: [],
  },
  {
    id: "design",
    title: "Design Gráfico",
    date: "2014 – 2016",
    details: [],
  },
];
