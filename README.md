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
├── tailwind.config.js      # Tema customizado (cores, animações, fontes)
└── .github/workflows/      # CI (valida pushes/PRs) + deploy para o GitHub Pages
```

## Comandos

- `npm install` — instalar dependências
- `npm run dev` — servidor de desenvolvimento
- `npm run build` — checa tipos (`tsc --noEmit`) e gera `dist/` de produção
- `npm run typecheck` — só a checagem de tipos
- `npm run preview` — serve o build de produção localmente

## Deploy

O deploy é feito **somente** pelo GitHub Actions (`.github/workflows/deploy-gh-pages.yml`): push na branch `main` → build → deploy no GitHub Pages. Não existe script de deploy local.

O workflow de CI (`ci.yml`) roda o mesmo build em pushes fora da `main` e em PRs, então erro de TypeScript ou de build quebra o check do commit/PR — não o site no ar.

Requisito no GitHub: **Settings → Pages → Source = "GitHub Actions"**. O domínio customizado vem do `public/CNAME`.

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
