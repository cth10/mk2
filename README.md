# Miku Fan Hub

Site dedicado aos fãs da Hatsune Miku e do universo Vocaloid. React 19 + TypeScript + Vite + Tailwind CSS, hospedado no GitHub Pages (miku.com.br).

## Estrutura do projeto

```
├── index.html              # Entry HTML (meta tags, fontes, fallback SPA)
├── public/                 # Estáticos copiados para dist/ (CNAME, 404.html, robots, sitemap, imagens)
├── src/
│   ├── main.tsx            # Bootstrap do React
│   ├── App.tsx             # Router + layout (Header/Footer)
│   ├── constants.tsx       # Config do site e definição de rotas (NAV_LINKS, ADDITIONAL_ROUTES)
│   ├── types.ts            # Tipos compartilhados
│   ├── index.css           # Tailwind + estilos customizados
│   ├── components/         # Header, Footer, ContentCard, PageWrapper, Icons
│   ├── pages/              # Uma página por rota
│   └── utils/              # newsData.tsx (conteúdo das notícias)
└── tailwind.config.js      # Tema customizado (cores, animações, fontes)
```

## Comandos

- `npm install` — instalar dependências
- `npm run dev` — servidor de desenvolvimento
- `npm run build` — checa tipos (`tsc --noEmit`) e gera `dist/` de produção
- `npm run typecheck` — só a checagem de tipos
- `npm run preview` — serve o build de produção localmente
- `npm run deploy` — build + publica `dist/` na branch `gh-pages` (deploy do site)

## Deploy

O deploy é **manual**, feito da sua máquina:

```
npm run deploy
```

O comando roda o build completo (com checagem de tipos — TypeScript quebrado não vai ao ar) e publica o conteúdo de `dist/` na branch `gh-pages`, que é a fonte do GitHub Pages. O site atualiza em ~1 minuto.

Requisito no GitHub: **Settings → Pages → Source = "Deploy from a branch"**, branch `gh-pages`, pasta `/ (root)`. O domínio customizado vem do `public/CNAME`.

> **Por que não GitHub Actions?** A conta está bloqueada por billing e o Actions não roda. Os workflows de CI/CD foram removidos, mas estão preservados no histórico: para restaurar no futuro, recupere `.github/workflows/` do commit `31a8478` e mude Pages → Source para "GitHub Actions".

Rotas SPA: o GitHub Pages serve `public/404.html` para caminhos desconhecidos; ele guarda a URL em `sessionStorage` e redireciona para `/`, e um script no `index.html` restaura a rota original. Não remova esses dois scripts.

## 📰 Adicionando novas notícias

1. Abra `src/utils/newsData.tsx`
2. Adicione um novo objeto no array `newsData` (o mais recente primeiro):

```tsx
{
  slug: 'url-amigavel-da-noticia',
  title: 'Título da notícia',
  summary: 'Resumo da notícia em português',
  date: 'Julho 2026',        // data curta para o card
  fullDate: '21 Julho 2026', // data completa na página de detalhe
  category: 'Eventos',       // Tecnologia, Eventos, Música, Cultura, Comunidade, Arte
  featured: false,           // true para destacar no topo
  content: (<> ...JSX do artigo... </>),
}
```

A notícia aparece automaticamente em `/noticias` e em `/noticias/<slug>`.
