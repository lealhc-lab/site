// Todo o texto do site mora aqui. Edite este arquivo para atualizar o conteúdo.
// Itens marcados com [PREENCHER] aguardam informação real — não publicar com eles.

export const site = {
  name: "Flávio Leal",
  role: "Design Lead",
  company: "Luizalabs",
  location: "São Paulo, BR",
  url: "https://flaviol.com.br",
  email: "[PREENCHER]@flaviol.com.br",
  linkedin: "https://www.linkedin.com/in/flleal",
  cvUrl: "/cv-flavio-leal.pdf", // colocar o PDF em public/

  hero: {
    greeting: "Oi, sou Flávio.",
    // Frase de posicionamento. Base: resumo público do LinkedIn. Ajustar após revisão.
    // [REVISAR] rascunho a partir do resumo público do LinkedIn
    statement:
      "Design Lead no Luizalabs. Junto com o time, desenho experiências que encantam clientes em cada interação — da estratégia ao código.",
    stats: [
      { value: "18+", label: "anos de design" }, // [CONFERIR] LinkedIn diz 18, perfil interno diz 20
      { value: "[PREENCHER]", label: "designers liderados" },
      { value: "[PREENCHER]", label: "produtos lançados" },
    ],
  },

  // [REVISAR] 1º parágrafo vem do seu perfil (gráfica → UX → dev); o 2º é rascunho meu.
  about: {
    title: "Do impresso ao código",
    paragraphs: [
      "Comecei na produção gráfica, migrei para UX e cheguei ao desenvolvimento. Essa trajetória me faz olhar o produto inteiro: da estratégia ao pixel, do pixel ao deploy.",
      "Hoje, como Design Lead no Luizalabs, conecto design, produto e engenharia para que decisões de experiência virem resultado de negócio — e para que o time cresça junto.",
    ],
  },

  // Trajetória — preencher a partir do LinkedIn (mais recente primeiro)
  career: [
    { period: "[PREENCHER] — hoje", role: "Design Lead", company: "Luizalabs" },
    { period: "[PREENCHER]", role: "[PREENCHER]", company: "[PREENCHER]" },
    { period: "[PREENCHER]", role: "[PREENCHER]", company: "[PREENCHER]" },
    { period: "[PREENCHER]", role: "[PREENCHER]", company: "[PREENCHER]" },
  ],

  knowledge: {
    title: "Conhecimento compartilhado",
    text: "Sempre disponível para compartilhar conhecimento, seja em eventos, aulas em graduação e pós-graduação ou em conteúdos como podcasts.",
    podcast: {
      show: "Cabeça de Lab",
      episode: "A prática do design na era da IA",
      description:
        "Um bate-papo com o time sobre como a IA saiu do teste isolado e virou a espinha dorsal do nosso workflow de design — de Figma Make e Figma Agents a Super Agentes no Google Enterprise.",
      embed: "https://open.spotify.com/embed/episode/0scRSOg0LryaDxn9t9Xno5?utm_source=generator&theme=0",
      url: "https://open.spotify.com/episode/0scRSOg0LryaDxn9t9Xno5",
    },
    // Fotos de eventos/aulas: colocar arquivos em public/img/talks/ e trocar `src`.
    photos: [
      { src: "", caption: "Evento — [PREENCHER]" },
      { src: "", caption: "Aula — pós-graduação [PREENCHER]" },
      { src: "", caption: "Talk — [PREENCHER]" },
    ],
  },
};
