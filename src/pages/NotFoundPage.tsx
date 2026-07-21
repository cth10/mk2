import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { HomeIcon } from '../components/Icons';

export const NotFoundPage: React.FC = () => {
  return (
    <PageWrapper title="Página não encontrada" titleIcon={<HomeIcon />}>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <ContentCard title="Erro 404">
        <div className="text-center py-8 space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            A página que você procura não existe ou foi movida. Que tal voltar
            para um lugar seguro?
          </p>
          <Link
            to="/"
            className="inline-block glass-effect px-8 py-4 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300"
          >
            Voltar para o Início
          </Link>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
