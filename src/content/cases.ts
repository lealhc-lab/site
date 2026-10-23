// Cases do portfólio. Cada item vira um card na home e uma página em /cases/{slug}.
// Estrutura pensada para quem avalia em 30 segundos: resumo no topo, profundidade abaixo.
// Marcadores: [CONFERIR] = rascunho meu a validar · [PREENCHER] = falta informação.

export type CaseImage = { src: string; caption: string };

export type CaseSection = {
  label?: string; // rótulo curto acima do título (ex.: fase do projeto)
  heading: string;
  body: string[];
  list?: string[];
  quote?: { text: string; author: string };
  images?: CaseImage[]; // 1 imagem = largura total · 2 = lado a lado
};

export type Case = {
  slug: string;
  number: string;
  title: string; // título orientado a impacto
  company: string;
  year: string;
  tags: string[];
  cover?: string;
  summary: {
    context: string;
    role: string;
    team: string;
    outcome: string;
  };
  metrics?: { value: string; label: string }[];
  sections: CaseSection[];
  draft?: boolean; // true = aparece como "em breve" na home e não gera página
};

const r7 = "/img/cases/r7";

export const cases: Case[] = [
  {
    slug: "r7-10-anos",
    number: "01",
    title: "R7 10 Anos: a home de um grande portal reorganizada a partir de quem lê",
    company: "Portal R7",
    year: "2019",
    tags: ["Discovery", "Arquitetura da informação", "Card sorting", "Mobile first"],
    cover: `${r7}/capa-nova-identidade.jpg`,
    summary: {
      context:
        "Nos 10 anos da marca, a home do R7 tinha conteúdo pulverizado, posições comerciais fixas e uma experiência mobile inferior ao desktop — embora mais de 70% dos acessos viessem do celular.",
      // [CONFERIR] descreva com suas palavras o que foi decisão sua
      role: "Condução de UX ponta a ponta: pesquisa, arquitetura da informação, protótipos e nova interface.",
      team: "Time de experiência do usuário com Conteúdo, Comercial, TI e BI, e consultorias Realtime Big Data, Web Estratégica (SEO) e Google.",
      outcome:
        "Nova arquitetura editorial no ar em setembro de 2019, 3 provas de conceito lançadas em produção e um grid flexível com novos formatos comerciais.",
    },
    metrics: [
      { value: "42", label: "pessoas ouvidas em 14 reuniões" },
      { value: "15", label: "participantes no card sorting" },
      { value: "1.304", label: "respostas em pesquisa por SMS" },
      { value: "3", label: "POCs lançadas em produção" },
    ],
    sections: [
      {
        label: "O desafio",
        heading: "Um novo ciclo para um portal que atende públicos muito diferentes",
        body: [
          "A marca de 10 anos representava um novo ciclo para o R7. O objetivo era desenhar uma home que atendesse aos diversos públicos do portal e, ao mesmo tempo, às dores dos times que operam o produto todos os dias: redação, comercial, parcerias e tecnologia.",
          "Usamos o Double Diamond como guia, em um projeto de nove meses — de janeiro a setembro de 2019.",
        ],
      },
      {
        label: "01 · Discover",
        heading: "Ouvir a operação e cruzar com dados de audiência",
        body: [
          "Em cinco semanas, fizemos 14 reuniões com 42 pessoas das áreas de Conteúdo, Comercial, TI, Parcerias, OTT, Transmídia e diretoria. PwC e Google contribuíram com pontos de usabilidade e viewability, e o time de BI com dados de uso da home.",
          "Para entender quem lê, cruzamos Facebook Audience Insights, Tail Target, Google Analytics e comScore e chegamos a três personas. O público é majoritariamente feminino: mulheres de 25 a 34 anos são 68% dos usuários, com interesse em pets, famosos, saúde, beleza, finanças pessoais e notícias locais.",
        ],
        images: [{ src: `${r7}/diagrama-afinidades.jpg`, caption: "Diagrama de afinidades com os insights de todas as áreas" }],
      },
      {
        label: "02 · Define",
        heading: "Nove problemas em comum, vindos de lugares diferentes",
        body: [
          "Documentamos cada insight em cartões e os agrupamos em um diagrama de afinidades. Problemas que pareciam isolados em cada área se repetiam:",
        ],
        list: [
          "Conteúdo mal agrupado na home, com notícias que não se relacionavam entre si",
          "Nomes de verticais e editorias que não conversavam com o público",
          "Mobile tratado como segunda versão do desktop",
          "Grid rígido, incapaz de acompanhar a urgência da notícia",
          "Poucos formatos para vídeo, ao vivo e conteúdo patrocinado",
        ],
      },
      {
        label: "03 · Develop",
        heading: "Testar as hipóteses com notícias reais, não com rótulos",
        body: [
          "Levantamos 12 hipóteses de reorganização das editorias e as levamos a 15 participantes alinhados às personas. A diferença em relação a um card sorting tradicional: usamos notícias do próprio portal como gatilho. Ver como cada pessoa classifica uma matéria que toca mais de um tema revelou prioridades que ninguém declararia em uma entrevista.",
          "Em seguida, validamos os nomes em escala com uma pesquisa por SMS: 60 mil disparos e 1.304 respostas, segmentadas pelas três personas.",
        ],
        images: [
          { src: `${r7}/card-sorting-tabulacao.jpg`, caption: "Tabulação do card sorting: editorias × verticais" },
          { src: `${r7}/editorias-renomeadas.jpg`, caption: "Editorias renomeadas a partir dos resultados" },
        ],
        quote: {
          text: "Eu acho uma boa ideia ter uma Home que eu mesmo possa customizar, ou que ela seja customizada de acordo com as notícias que eu mais acesso.",
          author: "Participante do card sorting",
        },
      },
      {
        label: "Decisões difíceis",
        heading: "Quando duas pesquisas discordam",
        body: [
          "No card sorting, a maioria não via problema em manter o nome Diversão, e Comportamento surgia como alternativa a Life Style. Na pesquisa por SMS, Entretenimento venceu em duas das três personas (71% e 81%) e Life Style foi o ponto em comum entre todas. Ficamos com o sinal de maior escala: R7 Diversão virou R7 Entretenimento e Meu Estilo virou R7 Life Style.",
          "Outras hipóteses caíram: Cultura Pop não tinha significado claro para o público, e Maternidade e Família restringia demais o tema — virou simplesmente Filhos. Esportes e Life Style se mostraram preferências opostas entre homens e mulheres, o que orientou a ordem das verticais para o público majoritário.",
        ],
      },
      {
        label: "Prova em produção",
        heading: "Três POCs antes do redesign completo",
        body: [
          "Para não depender só de pesquisa, lançamos três provas de conceito em produção com Conteúdo, Tecnologia e as consultorias de SEO e Google:",
        ],
        list: [
          "R7 Filhos — editoria própria para um tema forte no público e com potencial comercial",
          "Resumo R7 — formato rápido e mobile, no estilo stories, com boletins da TV e o resumo do dia",
          "R7 Planalto — rebranding de um blog do portal, com novo conceito, nome, menu e identidade visual",
        ],
      },
      {
        label: "04 · Deliver",
        heading: "Cinco pilares: estrutura, conteúdo, comercial, mobile e identidade",
        body: [
          "A nova estrutura permite trocar formatos de notícia no mesmo espaço, para que a redação ajuste o destaque conforme a importância do conteúdo. A navegação foi reorganizada pela ordem de interesse do público, com mais contraste nos nomes das verticais e sem conteúdo replicado nos submenus.",
        ],
        images: [
          { src: `${r7}/navegacao-antes.jpg`, caption: "Barra de navegação — antes" },
          { src: `${r7}/navegacao-depois.jpg`, caption: "Barra de navegação — depois" },
        ],
      },
      {
        heading: "Um grid que serve à redação e ao comercial",
        body: [
          "O mesmo grid abre posições variáveis para publicidade em qualquer linha, vitrines de marca e identificação de conteúdo patrocinado — antes, as posições fixas engessavam as propostas comerciais. No mobile, os formatos passaram a refletir o peso da notícia no desktop, com todo o conteúdo presente nos dois.",
        ],
        images: [
          { src: `${r7}/estrutura-grid.jpg`, caption: "Formatos intercambiáveis no mesmo espaço do grid" },
          { src: `${r7}/mobile-formatos.jpg`, caption: "Formatos mobile com o mesmo peso do desktop" },
        ],
      },
      {
        heading: "Uma identidade mais leve, com a notícia em destaque",
        body: [
          "A evolução visual — a home no topo desta página — trouxe linhas mais suaves e uma navegação refinada, com tags que mantêm o leitor dentro do portal.",
        ],
      },
      {
        label: "Resultado",
        heading: "Uma nova arquitetura no ar",
        body: [
          "Desde 27 de setembro de 2019, o R7 opera com a nova organização: R7 Notícias, Esportes, Entretenimento e Life Style, com editorias criadas, divididas e renomeadas a partir da pesquisa — como Política, Bem-Estar, Filhos, Cinema e Séries e Games.",
          "[PREENCHER] Se houver métricas pós-lançamento (audiência por editoria, tempo até a notícia no mobile, receita por formato), este é o lugar delas.",
        ],
      },
      {
        label: "Aprendizados",
        heading: "O que eu levaria adiante",
        body: [
          // [CONFERIR] rascunho — reescreva com a sua visão
          "Ouvir a operação foi tão importante quanto ouvir o leitor: os problemas da redação e do comercial eram os mesmos que o usuário sentia, vistos de outro lado. E pesquisas diferentes podem discordar — o trabalho de design é decidir qual sinal pesa mais e deixar a decisão explícita.",
        ],
      },
    ],
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

// Com um case real publicado, o modelo de layout não é mais necessário.
export const PREVIEW_TEMPLATE = false;
