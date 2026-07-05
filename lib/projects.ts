export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  details: string[];
}

export const projects: Project[] = [
  {
    id: "noda",
    title: "NODA",
    subtitle: "Prestação de serviços de design e software",
    date: "Desde 2021",
    details: [
      "Criação de Identidades visuais",
      "Design e desenvolvimento de Interfaces",
      "Desenvolvimento de landing pages e aplicações web",
    ],
  },
  {
    id: "patente",
    title: "2 Patentes de software",
    subtitle: "",
    date: "Desde 2018",
    details: [],
  },
  {
    id: "listei",
    title: "Listei",
    subtitle: "Micro SAAS de gestão de listas de casamento",
    date: "Desde 2025",
    details: [
      "Fluxo de autenticação",
      "Integração com banco de dados",
      "Criação, desenvolvimento e aplicação de design system.",
      "Gestão de projetos e versionamento",
    ],
  },
  {
    id: "termocrivo",
    title: "Termocrivo",
    subtitle: "Sistema de análise de cores em imagens termográficas",
    date: "Desde 2018",
    details: [
      "Contribuição acadêmica",
      "Patente de software com universidade federal",
      "Utilização de bibliotecas de análise de imagem",
    ],
  },
  {
    id: "checkapp",
    title: "CheckApp",
    subtitle: "Aplicativo de checklist para inspeção hospitalar",
    date: "Desde 2020",
    details: [
      "Gestão de hospitais, equipamentos e ordens de serviço.",
    ],
  },
  {
    id: "visual-thinker",
    title: "Visual Thinker",
    subtitle: "Sistema para auxiliar processo criativo de designers",
    date: "Desde 2018",
    details: [
      "Interpretação de linguagem natural",
      "Integração com APIs de imagens e projetos de design",
      "Liderança e SCRUM",
    ],
  },
];
