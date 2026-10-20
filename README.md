# flaviol.com.br — Portfólio

Site estático em Next.js. Todo o conteúdo fica em dois arquivos:

- `src/content/site.ts` — textos, trajetória, contato, podcast, fotos
- `src/content/cases.ts` — cases (cada um vira card na home + página em `/cases/{slug}/`)

Busque por `[PREENCHER]`, `[REVISAR]` e `[CONFERIR]` antes de publicar.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera a pasta out/ (site pronto para subir)
```

## Imagens

- Fotos de eventos/aulas: `public/img/talks/` → apontar em `site.ts > knowledge.photos[].src`
- Capas e imagens de cases: `public/img/cases/`
- Currículo: `public/cv-flavio-leal.pdf`

## Publicar na Hostinger

`npm run build` gera HTML puro na pasta `out/`. Ele não precisa de servidor Node.

**Opção A — app Node.js conectado ao GitHub** (se o plano tiver "Node.js Apps" no hPanel):
importar o repositório, comando de build `npm run build`, diretório de saída `out`.

**Opção B — arquivos estáticos**: enviar o conteúdo de `out/` para `public_html/`
pelo Gerenciador de Arquivos ou por FTP.

Depois de publicar, ativar o SSL gratuito no hPanel para o domínio flaviol.com.br.
