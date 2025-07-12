
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { NewsIcon, MikuBrandIcon } from '../constants';

const NewsCard = ({ title, summary, date, slug, featured = false }: {
  title: string;
  summary: string;
  date: string;
  slug: string;
  featured?: boolean;
}) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className={`glass-effect rounded-xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer group ${
        featured 
          ? 'border-cyan-400/50 news-glow' 
          : 'border-purple-500/20 hover:border-purple-400/40'
      }`}
      onClick={() => navigate(`/noticias/${slug}`)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <NewsIcon className="w-5 h-5 text-cyan-400" />
          <span className="text-xs text-slate-400 uppercase tracking-wide">{date}</span>
        </div>
        {featured && (
          <div className="flex items-center space-x-1 text-cyan-400 text-xs">
            <MikuBrandIcon className="w-4 h-4" />
            <span>DESTAQUE</span>
          </div>
        )}
      </div>
      
      <h3 className={`font-bold mb-3 group-hover:text-cyan-300 transition-colors duration-300 ${
        featured ? 'text-xl text-cyan-300' : 'text-lg text-slate-200'
      }`}>
        {title}
      </h3>
      
      <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
        {summary}
      </p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
          Ler mais →
        </span>
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400/30 rounded-full group-hover:bg-cyan-400/60 transition-colors"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const NoticiasPage: React.FC = () => {
  const noticias = [
    {
      title: "Celebração de 20 Anos e Novidades da Yamaha",
      summary: "A Yamaha lançou um site especial para comemorar o 20º aniversário do VOCALOID. Este é um grande marco, celebrando duas décadas de música e criatividade impulsionadas por esta tecnologia. A empresa também anunciou atualizações para o VOCALOID6 e novos bancos de voz com inteligência artificial.",
      date: "Janeiro 2025",
      slug: "yamaha-20-anos",
      featured: true
    }
  ];

  return (
    <PageWrapper title="Últimas Notícias do Mundo Vocaloid" titleIcon={<NewsIcon />}>
      <ContentCard title={
        <>
          <MikuBrandIcon className="inline w-6 h-6 mr-2 text-cyan-400" />
          Fique por Dentro das Novidades
        </>
      }>
        <div className="mb-8">
          <p className="text-lg text-slate-300 leading-relaxed">
            Acompanhe as últimas notícias, lançamentos e eventos do universo Vocaloid! 
            Aqui você encontra tudo sobre Hatsune Miku, atualizações de software, 
            novos bancos de voz e muito mais.
          </p>
        </div>

        <div className="grid gap-8">
          {noticias.map((noticia, index) => (
            <NewsCard
              key={index}
              title={noticia.title}
              summary={noticia.summary}
              date={noticia.date}
              slug={noticia.slug}
              featured={noticia.featured}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
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
      </ContentCard>
    </PageWrapper>
  );
};
