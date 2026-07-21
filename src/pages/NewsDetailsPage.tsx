import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { NewsIcon, MikuBrandIcon } from '../components/Icons';
import { newsData } from '../utils/newsData';

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
  </svg>
);

const TagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

export const NewsDetailsPage: React.FC = () => {
  const { slug } = useParams();
  const article = newsData.find(n => n.slug === slug);

  if (!article) {
    return (
      <PageWrapper title="Notícia não encontrada" titleIcon={<NewsIcon />}>
        <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-300 mb-4">Ops! Notícia não encontrada.</h2>
            <Link
                to="/noticias"
                className="text-cyan-400 hover:text-cyan-300 underline"
            >
                Voltar para lista de notícias
            </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={article.title} description={article.summary} titleIcon={<NewsIcon />}>
      {/* Link de voltar */}
      <div className="mb-8">
        <Link
          to="/noticias"
          className="group inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Voltar para Notícias</span>
        </Link>
      </div>

      <ContentCard>
        {/* Header da notícia */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{article.fullDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <TagIcon className="w-4 h-4" />
              <span>{article.category}</span>
            </div>
            {article.featured && (
              <div className="flex items-center space-x-2 text-cyan-400">
                <MikuBrandIcon className="w-4 h-4" />
                <span className="font-semibold">DESTAQUE</span>
              </div>
            )}
          </div>

          <p className="text-xl text-slate-300 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="prose prose-lg prose-invert max-w-none news-content">
          {article.content}
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
