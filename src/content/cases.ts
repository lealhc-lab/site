// Cases do portfólio. Cada item vira um card na home e uma página em /cases/{slug}.
// Estrutura pensada para quem avalia em 30 segundos: resumo no topo, profundidade abaixo.

export type Case = {
  slug: string;
  number: string;
  title: string; // título orientado a impacto
  company: string;
  year: string;
  tags: string[];
  cover?: string; // imagem em public/img/cases/
  summary: {
    context: string;
    role: string;
    team: string;
    outcome: string;
  };
  sections: { heading: string; body: string[]; image?: string }[];
  draft?: boolean; // true = aparece como "em breve" na home e não gera página
};

export const cases: Case[] = [
  {
    slug: "case-01",
    number: "01",
    title: "Título orientado a impacto do case",
    company: "Luizalabs",
    year: "2026",
    tags: ["Estratégia", "IA", "Escala"],
    summary: {
      context: "Qual era o problema de negócio e de usuário.",
      role: "O que foi decisão sua.",
      team: "Tamanho e composição do time.",
      outcome: "Resultado com número, se houver.",
    },
    sections: [
      { heading: "O problema", body: ["[PREENCHER]"] },
      { heading: "As decisões difíceis", body: ["O que foi escolhido, o que foi abandonado e por quê."] },
      { heading: "O resultado", body: ["[PREENCHER]"] },
      { heading: "O que eu levaria adiante", body: ["[PREENCHER]"] },
    ],
    draft: true,
  },
  {
    slug: "case-02",
    number: "02",
    title: "Case em preparação",
    company: "—",
    year: "—",
    tags: ["Em breve"],
    summary: { context: "", role: "", team: "", outcome: "" },
    sections: [],
    draft: true,
  },
  {
    slug: "case-03",
    number: "03",
    title: "Case em preparação",
    company: "—",
    year: "—",
    tags: ["Em breve"],
    summary: { context: "", role: "", team: "", outcome: "" },
    sections: [],
    draft: true,
  },
  {
    slug: "case-04",
    number: "04",
    title: "Case em preparação",
    company: "—",
    year: "—",
    tags: ["Em breve"],
    summary: { context: "", role: "", team: "", outcome: "" },
    sections: [],
    draft: true,
  },
];

// Enquanto não houver cases publicados, gera a página do case-01 como modelo de layout.
export const PREVIEW_TEMPLATE = true;
