
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';

const CultureIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9Z" />
  </svg>
);

const GlobalMap = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl overflow-hidden border border-cyan-500/30">
    {/* Continents represented as simple shapes */}
    <div className="absolute top-8 left-8 w-16 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg opacity-60"></div>
    <div className="absolute top-12 left-28 w-20 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg opacity-60"></div>
    <div className="absolute top-6 right-16 w-14 h-10 bg-gradient-to-br from-red-400 to-pink-600 rounded-lg opacity-60"></div>
    <div className="absolute bottom-8 left-12 w-12 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-60"></div>
    
    {/* Connection lines */}
    <div className="absolute top-14 left-24 w-20 h-0.5 bg-cyan-400 animate-pulse"></div>
    <div className="absolute top-18 left-48 w-16 h-0.5 bg-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    <div className="absolute top-22 right-30 w-12 h-0.5 bg-cyan-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
    
    {/* Pulse points */}
    <div className="absolute top-14 left-16 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute top-20 left-38 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-12 right-24 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
  </div>
);

const CulturalIcons = () => (
  <div className="flex items-center justify-center space-x-8 my-8">
    <div className="text-center">
      <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '0s' }}>🎌</div>
      <div className="text-xs text-slate-400">Japão</div>
    </div>
    <div className="text-center">
      <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '0.5s' }}>🇺🇸</div>
      <div className="text-xs text-slate-400">EUA</div>
    </div>
    <div className="text-center">
      <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '1s' }}>🇪🇺</div>
      <div className="text-xs text-slate-400">Europa</div>
    </div>
    <div className="text-center">
      <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '1.5s' }}>🇧🇷</div>
      <div className="text-xs text-slate-400">Brasil</div>
    </div>
    <div className="text-center">
      <div className="text-4xl mb-2 animate-bounce" style={{ animationDelay: '2s' }}>🌏</div>
      <div className="text-xs text-slate-400">Ásia</div>
    </div>
  </div>
);

const TimelineElement = ({ year, event, color }: { year: string; event: string; color: string }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center text-black font-bold shrink-0 shadow-lg`}>
      {year}
    </div>
    <div className="glass-effect rounded-lg p-4 border border-purple-500/20 flex-1">
      <p className="text-slate-300">{event}</p>
    </div>
  </div>
);

const FestivalStage = () => (
  <div className="relative w-full h-32 bg-gradient-to-t from-purple-900 to-pink-900 rounded-xl overflow-hidden border border-pink-500/30">
    {/* Stage */}
    <div className="absolute bottom-0 left-1/4 right-1/4 h-8 bg-gradient-to-t from-gray-800 to-gray-600 rounded-t-lg"></div>
    
    {/* Spotlights */}
    <div className="absolute top-4 left-8 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-yellow-400 opacity-60 animate-pulse"></div>
    <div className="absolute top-4 right-8 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-cyan-400 opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    
    {/* Audience (simplified) */}
    <div className="absolute bottom-4 left-4 space-x-1 flex">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-1 h-4 bg-gradient-to-t from-slate-600 to-slate-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>
      ))}
    </div>
    <div className="absolute bottom-4 right-4 space-x-1 flex">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="w-1 h-4 bg-gradient-to-t from-slate-600 to-slate-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1 + 0.5}s` }}></div>
      ))}
    </div>
    
    {/* Hologram effect */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-cyan-400/60 to-transparent rounded-full animate-pulse"></div>
  </div>
);

export const CulturaPage: React.FC = () => {
  return (
    <PageWrapper title="🌍 Cultura Global" titleIcon={<CultureIcon />}>
      <ContentCard title="Impacto Cultural Mundial">
        <GlobalMap />
        <p className="mt-6">
          Hatsune Miku transcendeu suas origens como software para se tornar um fenômeno cultural global, 
          influenciando música, arte, tecnologia e comunidades em todos os continentes. Sua presença 
          cultural vai muito além do Japão, criando pontes entre diferentes culturas e gerações.
        </p>
        <p className="mt-3">
          O fenômeno Vocaloid representa uma nova forma de expressão cultural digital, onde a criatividade 
          coletiva e a colaboração internacional florescem através de uma plataforma tecnológica comum.
        </p>
      </ContentCard>

      <ContentCard title="Presença Cultural por Região">
        <CulturalIcons />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { region: 'Japão', description: 'Berço do fenômeno', cultural: 'Concertos, merchandising, colaborações mainstream', color: 'from-red-400 to-pink-400' },
            { region: 'Estados Unidos', description: 'Expansão ocidental', cultural: 'Convenções, comunidades online, tradução de músicas', color: 'from-blue-400 to-cyan-400' },
            { region: 'Europa', description: 'Diversidade cultural', cultural: 'Festivais locais, artistas independentes, covers multilíngues', color: 'from-green-400 to-teal-400' },
            { region: 'América Latina', description: 'Paixão latina', cultural: 'Covers em espanhol/português, fandoms ativos', color: 'from-yellow-400 to-orange-400' },
            { region: 'Ásia-Pacífico', description: 'Conectividade regional', cultural: 'Adaptações locais, colaborações transfronteiriças', color: 'from-purple-400 to-pink-400' },
            { region: 'África/Oriente Médio', description: 'Crescimento emergente', cultural: 'Comunidades jovens, fusão com músicas tradicionais', color: 'from-indigo-400 to-purple-400' }
          ].map((item) => (
            <div key={item.region} className="glass-effect rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className={`w-full h-2 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-pulse`}></div>
              <h3 className="text-lg font-bold text-white mb-1">{item.region}</h3>
              <h4 className="text-sm text-cyan-300 mb-2">{item.description}</h4>
              <p className="text-xs text-slate-300">{item.cultural}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Timeline Cultural">
        <div className="space-y-4">
          <TimelineElement 
            year="2007" 
            event="Lançamento de Hatsune Miku marca o início de uma revolução cultural digital"
            color="bg-gradient-to-br from-cyan-400 to-blue-400"
          />
          <TimelineElement 
            year="2009" 
            event="Primeiras traduções de músicas Vocaloid para outros idiomas aparecem online"
            color="bg-gradient-to-br from-purple-400 to-pink-400"
          />
          <TimelineElement 
            year="2011" 
            event="Primeiro concerto holográfico de Miku atrai atenção internacional"
            color="bg-gradient-to-br from-green-400 to-teal-400"
          />
          <TimelineElement 
            year="2014" 
            event="Miku Expo inicia turnês internacionais, levando a cultura Vocaloid globalmente"
            color="bg-gradient-to-br from-yellow-400 to-orange-400"
          />
          <TimelineElement 
            year="2020" 
            event="Pandemia acelera criação digital, Vocaloid se torna outlet criativo mundial"
            color="bg-gradient-to-br from-red-400 to-pink-400"
          />
        </div>
      </ContentCard>

      <ContentCard title="Fenômenos Culturais">
        <FestivalStage />
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Concertos Holográficos
            </h3>
            <p className="text-slate-300">
              Os shows ao vivo de Hatsune Miku redefiniriam o conceito de performance musical, 
              criando uma nova forma de arte que combina tecnologia, música e teatro.
            </p>
            <div className="glass-effect rounded-lg p-3 border border-cyan-500/20">
              <div className="text-cyan-300 text-sm">🎭 Performances em mais de 20 países</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Memes e Internet
            </h3>
            <p className="text-slate-300">
              Miku se tornou uma figura icônica da cultura de internet, inspirando memes, 
              remixes e conteúdo viral que transcende barreiras linguísticas.
            </p>
            <div className="glass-effect rounded-lg p-3 border border-purple-500/20">
              <div className="text-purple-300 text-sm">🌐 Presença viral em todas as plataformas</div>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Legado Cultural Duradouro">
        <div className="text-center mb-6">
          <svg className="w-16 h-16 mx-auto mb-4 text-yellow-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
          </svg>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Uma Nova Era Cultural
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center glass-effect rounded-xl p-6 border border-cyan-500/20">
            <svg className="w-12 h-12 mx-auto mb-3 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3V13.55A4 4 0 1 0 14 17V7H18V5H14V3H12ZM10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z" />
            </svg>
            <h4 className="text-cyan-300 font-semibold mb-2">Democratização Musical</h4>
            <p className="text-slate-300 text-sm">Qualquer pessoa pode criar e compartilhar música globalmente</p>
          </div>
          
          <div className="text-center glass-effect rounded-xl p-6 border border-purple-500/20">
            <svg className="w-12 h-12 mx-auto mb-3 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 18.72A9.094 9.094 0 0 0 21.741 18.241A3 3 0 0 0 17.059 15.521M18 18.72A9.094 9.094 0 0 1 21.741 18.241A3 3 0 0 1 17.059 15.521M18 18.719C18 19.324 17.676 19.852 17.2 20.2L12 15L6.8 20.2C6.324 19.852 6 19.324 6 18.719M18 18.719A5.971 5.971 0 0 0 17.059 15.521M6 18.719A5.971 5.971 0 0 1 6.941 15.521M17.059 15.521A5.995 5.995 0 0 0 12 12.75A5.995 5.995 0 0 0 6.941 15.521M15 6.75A3 3 0 1 1 9 6.75A3 3 0 0 1 15 6.75Z" />
            </svg>
            <h4 className="text-purple-300 font-semibold mb-2">Colaboração Global</h4>
            <p className="text-slate-300 text-sm">Artistas de diferentes culturas trabalham juntos virtualmente</p>
          </div>
          
          <div className="text-center glass-effect rounded-xl p-6 border border-pink-500/20">
            <svg className="w-12 h-12 mx-auto mb-3 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.81 14.12L5.64 11.29C8.34 10.79 11.04 10.8 13.74 11.33L16.55 14.14C17.34 14.93 17.34 16.17 16.55 16.96L14.96 18.55C14.17 19.34 12.93 19.34 12.14 18.55L9.33 15.74C6.63 15.24 3.93 15.23 1.23 15.76L2.81 14.12ZM18.88 2.12L16.05 4.95C13.35 5.45 10.65 5.44 7.95 4.91L5.14 2.1C4.35 1.31 4.35 0.07 5.14 -0.72L6.73 -2.31C7.52 -3.1 8.76 -3.1 9.55 -2.31L12.36 0.5C15.06 1 17.76 1.01 20.46 0.48L18.88 2.12Z" />
            </svg>
            <h4 className="text-pink-300 font-semibold mb-2">Inovação Contínua</h4>
            <p className="text-slate-300 text-sm">Inspira novas tecnologias e formas de expressão artística</p>
          </div>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
