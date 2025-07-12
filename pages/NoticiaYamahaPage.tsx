
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { NewsIcon, MikuBrandIcon } from '../constants';

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

export const NoticiaYamahaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper title="Celebração de 20 Anos e Novidades da Yamaha" titleIcon={<NewsIcon />}>
      {/* Botão de voltar */}
      <div className="mb-8">
        <button 
          onClick={() => navigate('/noticias')}
          className="group flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Voltar para Notícias</span>
        </button>
      </div>

      <ContentCard title="">
        {/* Header da notícia */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span>Janeiro 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <TagIcon className="w-4 h-4" />
              <span>Tecnologia</span>
            </div>
            <div className="flex items-center space-x-2 text-cyan-400">
              <MikuBrandIcon className="w-4 h-4" />
              <span className="font-semibold">DESTAQUE</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 leading-tight">
            Celebração de 20 Anos e Novidades da Yamaha
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed">
            A Yamaha marca um marco histórico com o 20º aniversário do VOCALOID, 
            trazendo inovações e novos bancos de voz com inteligência artificial.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <NewsIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyan-300">20º Aniversário do VOCALOID</h2>
                <p className="text-slate-400">Um marco histórico na síntese vocal</p>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              A Yamaha, desenvolvedora do software VOCALOID, lançou um site especial para comemorar o 20º aniversário do VOCALOID. 
              Este é um grande marco, celebrando duas décadas de música e criatividade impulsionadas por esta tecnologia revolucionária.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mr-3"></span>
                Atualizações do VOCALOID6
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Além da celebração, a empresa tem trabalhado ativamente em atualizações para a versão mais recente do seu editor, 
                o VOCALOID6. As atualizações mais recentes (versões 6.6.0 e 6.6.1) foram lançadas em junho de 2025, 
                trazendo melhorias significativas e correções importantes para os produtores musicais.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mr-3"></span>
                Novos Bancos de Voz com IA
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                A Yamaha também anunciou nos últimos meses vários novos bancos de voz para o VOCALOID6, 
                muitos deles utilizando inteligência artificial para criar vocais ainda mais realistas e expressivos. 
                Esses lançamentos expandem significativamente a paleta de vozes disponíveis para os criadores de música.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">🎤 AI Kizuna Akari</h4>
                  <p className="text-sm text-slate-300">
                    Nova tecnologia de IA aplicada à popular voice bank Kizuna Akari, oferecendo 
                    maior naturalidade e expressividade vocal.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">🎵 Kotonoha Akane & Aoi</h4>
                  <p className="text-sm text-slate-300">
                    Dual voice bank trazendo as irmãs Kotonoha com vocais complementares 
                    para produções mais diversificadas.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg p-4 md:col-span-2">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">✨ AI Yuzuki Yukari</h4>
                  <p className="text-sm text-slate-300">
                    Versão aprimorada com inteligência artificial da querida Yuzuki Yukari, 
                    mantendo suas características únicas com ainda mais realismo.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">🌟 Impacto na Comunidade</h3>
              <p className="text-slate-300 leading-relaxed">
                Este marco de 20 anos representa não apenas o sucesso tecnológico do VOCALOID, 
                mas também o crescimento de uma comunidade global de criadores que transformaram 
                a síntese vocal em uma forma de arte genuína. Com essas novas ferramentas de IA, 
                a Yamaha continua a democratizar a criação musical e a inspirar a próxima geração de produtores.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <div className="glass-effect rounded-xl p-8 border border-purple-500/20">
              <div className="flex justify-center mb-4">
                <MikuBrandIcon className="w-16 h-16 text-cyan-400 animate-float" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                Continue Explorando
              </h3>
              <p className="text-slate-300 mb-6">
                Descubra mais sobre a tecnologia VOCALOID e o universo de Hatsune Miku em nossas outras seções.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate('/sobre-vocaloid')}
                  className="glass-effect px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-cyan-300 hover:text-cyan-200"
                >
                  Sobre Vocaloid
                </button>
                <button 
                  onClick={() => navigate('/sobre-miku')}
                  className="glass-effect px-6 py-3 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-purple-300 hover:text-purple-200"
                >
                  Sobre Miku
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
