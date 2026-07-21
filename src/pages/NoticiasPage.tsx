
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import {
  NewsIcon,
  MikuBrandIcon,
  SparklesIcon,
  SearchIcon,
  CalendarIcon,
  ArrowRightIcon,
  ArrowsUpDownIcon,
  XMarkIcon,
  ChevronDownIcon,
  Squares2X2Icon,
  Bars3Icon,
} from '../components/Icons';
import { newsData, NewsArticle } from '../utils/newsData';

const ALL_CATEGORIES = 'Todas';
const PAGE_SIZE = 6;
const VIEW_STORAGE_KEY = 'miku-news-view';

type ViewMode = 'grid' | 'list';

/* Identidade visual por categoria — classes completas para o Tailwind detectar */
const CATEGORY_STYLES: Record<string, { pill: string; line: string; dot: string }> = {
  Eventos: {
    pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
    line: 'via-cyan-400/70',
    dot: 'bg-cyan-400',
  },
  'Música': {
    pill: 'bg-pink-500/15 text-pink-300 border-pink-400/30',
    line: 'via-pink-400/70',
    dot: 'bg-pink-400',
  },
  Arte: {
    pill: 'bg-purple-500/15 text-purple-300 border-purple-400/30',
    line: 'via-purple-400/70',
    dot: 'bg-purple-400',
  },
  Cultura: {
    pill: 'bg-amber-500/15 text-amber-300 border-amber-400/30',
    line: 'via-amber-400/70',
    dot: 'bg-amber-400',
  },
};

const DEFAULT_CATEGORY_STYLE = {
  pill: 'bg-slate-500/15 text-slate-300 border-slate-400/30',
  line: 'via-slate-400/70',
  dot: 'bg-slate-400',
};

const getCategoryStyle = (category: string) => CATEGORY_STYLES[category] ?? DEFAULT_CATEGORY_STYLE;

/* Busca tolerante a acentos: "musica" encontra "Música" */
const normalizeText = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const PT_MONTHS: Record<string, number> = {
  janeiro: 0, fevereiro: 1, marco: 2, 'março': 2, abril: 3, maio: 4, junho: 5,
  julho: 6, agosto: 7, setembro: 8, outubro: 9, novembro: 10, dezembro: 11,
};

/* Converte "21 Julho 2026" ou "Junho 2026" em timestamp para ordenação */
const parseNewsDate = (fullDate: string): number => {
  const match = fullDate.toLowerCase().match(/(?:(\d{1,2})\s+)?(?:de\s+)?([a-zç]+)\s+(?:de\s+)?(\d{4})/);
  if (!match) return 0;
  const day = match[1] ? Number(match[1]) : 1;
  const month = PT_MONTHS[match[2]] ?? 0;
  return new Date(Number(match[3]), month, day).getTime();
};

const getInitialViewMode = (): ViewMode => {
  try {
    return window.localStorage.getItem(VIEW_STORAGE_KEY) === 'list' ? 'list' : 'grid';
  } catch {
    return 'grid';
  }
};

const CategoryBadge = ({ category }: { category: string }) => {
  const style = getCategoryStyle(category);
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap ${style.pill}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
      {category}
    </span>
  );
};

const FeaturedHero = ({ article }: { article: NewsArticle }) => (
  <Link
    to={`/noticias/${article.slug}`}
    className="news-card-in group relative block glass-effect rounded-3xl overflow-hidden border border-cyan-400/40 news-glow transition-all duration-500 hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
  >
    <div className="grid lg:grid-cols-5">
      {/* Painel decorativo */}
      <div className="relative order-first lg:order-last lg:col-span-2 min-h-[180px] lg:min-h-full overflow-hidden bg-gradient-to-br from-cyan-500/20 via-purple-500/25 to-pink-500/20 flex items-center justify-center">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/30 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-12 -right-8 w-48 h-48 bg-pink-400/25 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute w-44 h-44 rounded-full border border-cyan-300/30 animate-pulse" aria-hidden="true" />
        <MikuBrandIcon className="relative w-24 h-24 lg:w-32 lg:h-32 animate-float drop-shadow-[0_0_25px_rgba(0,245,255,0.45)]" />
      </div>

      {/* Conteúdo */}
      <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col items-start gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/30">
            <SparklesIcon className="w-3.5 h-3.5" />
            Destaque
          </span>
          <CategoryBadge category={article.category} />
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 uppercase tracking-wide">
            <CalendarIcon className="w-4 h-4 text-cyan-400" />
            {article.fullDate}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-50 leading-tight font-noto-jp group-hover:text-cyan-300 transition-colors duration-300">
          {article.title}
        </h2>

        <p className="text-slate-300 leading-relaxed line-clamp-3 lg:line-clamp-4">
          {article.summary}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 group-hover:gap-3 group-hover:shadow-cyan-400/40">
          Ler matéria completa
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </div>
    </div>
  </Link>
);

/* Card do modo Grade */
const NewsCard = ({ article, index }: { article: NewsArticle; index: number }) => {
  const style = getCategoryStyle(article.category);
  return (
    <Link
      to={`/noticias/${article.slug}`}
      className="news-card-in group relative flex flex-col glass-effect rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      style={{ animationDelay: `${Math.min(index, 11) * 60}ms` }}
    >
      {/* Linha de acento na cor da categoria */}
      <div className={`h-0.5 w-full bg-gradient-to-r from-transparent ${style.line} to-transparent`} aria-hidden="true" />

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <CategoryBadge category={article.category} />
          {article.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-cyan-300">
              <SparklesIcon className="w-3.5 h-3.5" />
              Destaque
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-100 leading-snug mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1">
          {article.summary}
        </p>

        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 uppercase tracking-wide">
            <CalendarIcon className="w-4 h-4" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-2 group-hover:text-cyan-300">
            Ler mais
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

/* Linha compacta do modo Lista — pensada para escanear muitas notícias */
const NewsRow = ({ article, index }: { article: NewsArticle; index: number }) => {
  const style = getCategoryStyle(article.category);
  return (
    <Link
      to={`/noticias/${article.slug}`}
      className="news-card-in group relative flex items-center gap-4 sm:gap-5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md py-4 pl-5 pr-4 sm:pl-6 sm:pr-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      style={{ animationDelay: `${Math.min(index, 11) * 40}ms` }}
    >
      {/* Barra de acento na cor da categoria */}
      <span className={`absolute inset-y-0 left-0 w-1 ${style.dot} opacity-70`} aria-hidden="true" />

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center gap-2">
          <CategoryBadge category={article.category} />
          {article.featured && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-cyan-300">
              <SparklesIcon className="w-3.5 h-3.5" />
              Destaque
            </span>
          )}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug line-clamp-2 sm:line-clamp-1 group-hover:text-cyan-300 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="mt-1 hidden md:block text-sm text-slate-400 line-clamp-1">
          {article.summary}
        </p>
      </div>

      <div className="flex flex-shrink-0 items-center gap-3 sm:gap-4">
        <span className="hidden xs:inline-flex items-center gap-1.5 text-xs text-slate-500 uppercase tracking-wide whitespace-nowrap">
          <CalendarIcon className="w-4 h-4" />
          {article.date}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10">
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export const NoticiasPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);
  const [query, setQuery] = useState('');
  const [newestFirst, setNewestFirst] = useState(true);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [viewMode, setViewMode] = useState<ViewMode>(getInitialViewMode);

  /* Persiste a preferência de visualização entre visitas */
  useEffect(() => {
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, viewMode);
    } catch {
      /* armazenamento indisponível — ignora */
    }
  }, [viewMode]);

  /* Categorias derivadas dos dados, com contagem de notícias */
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const article of newsData) {
      counts.set(article.category, (counts.get(article.category) ?? 0) + 1);
    }
    return [
      { name: ALL_CATEGORIES, count: newsData.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, []);

  const filteredArticles = useMemo(() => {
    const q = normalizeText(query.trim());
    return newsData
      .filter((article) => {
        const matchesCategory = activeCategory === ALL_CATEGORIES || article.category === activeCategory;
        const matchesQuery =
          !q ||
          normalizeText(article.title).includes(q) ||
          normalizeText(article.summary).includes(q) ||
          normalizeText(article.category).includes(q);
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        const diff = parseNewsDate(a.fullDate) - parseNewsDate(b.fullDate);
        return newestFirst ? -diff : diff;
      });
  }, [activeCategory, query, newestFirst]);

  /* Ao mudar filtros, volta para a primeira "página" de resultados */
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, query, newestFirst]);

  const isDefaultView = activeCategory === ALL_CATEGORIES && query.trim() === '';
  const hasActiveFilters = !isDefaultView;
  const heroArticle = isDefaultView ? filteredArticles.find((a) => a.featured) ?? null : null;
  const gridArticles = heroArticle
    ? filteredArticles.filter((a) => a.slug !== heroArticle.slug)
    : filteredArticles;
  const visibleArticles = gridArticles.slice(0, visibleCount);
  const remainingCount = gridArticles.length - visibleArticles.length;

  /* Agrupa as notícias visíveis por mês ("Julho 2026"), preservando a ordenação —
     transforma a lista em um arquivo escaneável quando há muitas notícias */
  const articleGroups: { label: string; items: { article: NewsArticle; index: number }[] }[] = [];
  visibleArticles.forEach((article, index) => {
    const last = articleGroups[articleGroups.length - 1];
    if (last && last.label === article.date) {
      last.items.push({ article, index });
    } else {
      articleGroups.push({ label: article.date, items: [{ article, index }] });
    }
  });

  const clearFilters = () => {
    setActiveCategory(ALL_CATEGORIES);
    setQuery('');
  };

  const resultText = (() => {
    if (filteredArticles.length === 0) return 'Nenhuma notícia encontrada';
    if (isDefaultView) {
      return `${newsData.length} ${newsData.length === 1 ? 'notícia publicada' : 'notícias publicadas'}`;
    }
    return `${filteredArticles.length} ${filteredArticles.length === 1 ? 'notícia encontrada' : 'notícias encontradas'}`;
  })();

  const viewToggleButton = (mode: ViewMode, label: string, icon: React.ReactNode) => {
    const isActive = viewMode === mode;
    return (
      <button
        type="button"
        onClick={() => setViewMode(mode)}
        aria-pressed={isActive}
        aria-label={`Visualizar em ${label.toLowerCase()}`}
        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
          isActive
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md shadow-cyan-500/25'
            : 'text-slate-400 hover:text-cyan-300'
        }`}
      >
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </button>
    );
  };

  return (
    <PageWrapper
      title="Últimas Notícias do Mundo Vocaloid"
      description="Acompanhe as últimas notícias, lançamentos e eventos do universo Vocaloid: Hatsune Miku, turnês, jogos, arte e muito mais."
      titleIcon={<NewsIcon />}
    >
      <p className="mx-auto max-w-2xl text-center text-base sm:text-lg text-slate-300 leading-relaxed">
        Lançamentos, eventos, colaborações e tudo o que move o universo Vocaloid —
        reunido em um só lugar, do mais recente ao arquivo.
      </p>

      <div className="space-y-8">
        {/* Matéria em destaque (apenas na visão geral) */}
        {heroArticle && <FeaturedHero article={heroArticle} />}

        {/* Barra de ferramentas: busca, ordenação, visualização e categorias */}
        <div className="sticky top-24 z-40 rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-2xl shadow-black/30 p-3 sm:p-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar notícia por título ou assunto..."
                aria-label="Buscar notícias"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-11 pr-10 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400/50 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Limpar busca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setNewestFirst((v) => !v)}
                aria-label={`Ordenar por notícias ${newestFirst ? 'mais antigas' : 'mais recentes'}`}
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <ArrowsUpDownIcon className="w-4 h-4 text-cyan-400" />
                {newestFirst ? 'Mais recentes' : 'Mais antigas'}
              </button>

              {/* Alternância Grade / Lista */}
              <div
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-1"
                role="group"
                aria-label="Modo de visualização"
              >
                {viewToggleButton('grid', 'Grade', <Squares2X2Icon className="w-4 h-4" />)}
                {viewToggleButton('list', 'Lista', <Bars3Icon className="w-4 h-4" />)}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar notícias por categoria">
            {categories.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300'
                  }`}
                >
                  {category.name}
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {category.count}
                  </span>
                </button>
              );
            })}

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-400 transition-all hover:text-cyan-300 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <XMarkIcon className="w-3.5 h-3.5" />
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Resultados */}
        <section aria-label="Lista de notícias">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-6">
            <p className="text-sm text-slate-400" aria-live="polite">
              {resultText}
            </p>
            {gridArticles.length > 0 && (
              <p className="text-xs text-slate-500">
                Mostrando {visibleArticles.length} de {gridArticles.length}
              </p>
            )}
          </div>

          {visibleArticles.length > 0 ? (
            <div className="space-y-10">
              {articleGroups.map((group) => (
                <section key={group.label} aria-label={`Notícias de ${group.label}`}>
                  {/* Cabeçalho do mês */}
                  <div className="mb-5 flex items-center gap-4">
                    <h2 className="flex-shrink-0 text-lg sm:text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-noto-jp">
                      {group.label}
                    </h2>
                    <span className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-slate-400">
                      {group.items.length} {group.items.length === 1 ? 'notícia' : 'notícias'}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-purple-400/20 to-transparent" aria-hidden="true" />
                  </div>

                  {viewMode === 'grid' ? (
                    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {group.items.map(({ article, index }) => (
                        <NewsCard key={article.slug} article={article} index={index} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {group.items.map(({ article, index }) => (
                        <NewsRow key={article.slug} article={article} index={index} />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <div className="news-card-in glass-effect rounded-2xl border border-purple-500/20 p-10 sm:p-14 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30">
                <SearchIcon className="w-7 h-7 text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Nenhuma notícia encontrada
              </h3>
              <p className="text-slate-400 mb-6">
                Tente outro termo de busca ou explore todas as categorias.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <XMarkIcon className="w-4 h-4" />
                Limpar filtros
              </button>
            </div>
          )}

          {remainingCount > 0 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="w-full max-w-xs">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
                    style={{ width: `${Math.round((visibleArticles.length / gridArticles.length) * 100)}%` }}
                    role="progressbar"
                    aria-valuenow={visibleArticles.length}
                    aria-valuemin={0}
                    aria-valuemax={gridArticles.length}
                    aria-label="Progresso de notícias exibidas"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-sm font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Mostrar mais notícias
                <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 text-xs">
                  +{remainingCount}
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Chamada final */}
      <div className="text-center">
        <div className="glass-effect rounded-xl p-8 border border-purple-500/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
              <NewsIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">
            Mais Notícias em Breve!
          </h3>
          <p className="text-slate-300">
            Estamos sempre atualizando com as últimas novidades do mundo Vocaloid.
            Volte em breve para mais conteúdo exclusivo!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};
