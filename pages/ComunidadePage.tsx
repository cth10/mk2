
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';

const CommunityIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
);

const NetworkNodes = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl overflow-hidden border border-purple-500/30">
    {/* Central node (Miku) */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold animate-pulse">
      M
    </div>
    
    {/* Community nodes */}
    {[
      { top: '20%', left: '20%', delay: '0s', color: 'from-pink-400 to-red-400' },
      { top: '20%', right: '20%', delay: '0.5s', color: 'from-green-400 to-teal-400' },
      { bottom: '20%', left: '20%', delay: '1s', color: 'from-yellow-400 to-orange-400' },
      { bottom: '20%', right: '20%', delay: '1.5s', color: 'from-blue-400 to-indigo-400' },
      { top: '10%', left: '50%', delay: '2s', color: 'from-purple-400 to-pink-400' },
      { bottom: '10%', left: '50%', delay: '2.5s', color: 'from-cyan-400 to-blue-400' }
    ].map((node, i) => (
      <div key={i} className={`absolute w-6 h-6 bg-gradient-to-br ${node.color} rounded-full animate-ping`} 
           style={{ ...node, animationDelay: node.delay, animationDuration: '2s' }}></div>
    ))}
    
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.6" className="animate-pulse" />
      <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.6" className="animate-pulse" />
      <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.6" className="animate-pulse" />
      <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="rgb(34, 211, 238)" strokeWidth="1" opacity="0.6" className="animate-pulse" />
    </svg>
  </div>
);

const CommunityStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
    {[
      { number: '10M+', label: 'Produtores', icon: '🎵' },
      { number: '50M+', label: 'Fãs Ativos', icon: '❤️' },
      { number: '100+', label: 'Países', icon: '🌍' },
      { number: '24/7', label: 'Atividade', icon: '⚡' }
    ].map((stat, i) => (
      <div key={i} className="text-center glass-effect rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
        <div className="text-2xl mb-2">{stat.icon}</div>
        <div className="text-xl font-bold text-cyan-400">{stat.number}</div>
        <div className="text-xs text-slate-300">{stat.label}</div>
      </div>
    ))}
  </div>
);

const CollaborationFlow = () => (
  <div className="flex items-center justify-between my-8">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl mb-2 animate-bounce">
        🎹
      </div>
      <div className="text-sm text-slate-300">Compositor</div>
    </div>
    
    <div className="flex-1 mx-4 flex items-center justify-center">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
    
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-2xl mb-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
        🎨
      </div>
      <div className="text-sm text-slate-300">Artista</div>
    </div>
    
    <div className="flex-1 mx-4 flex items-center justify-center">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-400 rounded-full animate-ping"
            style={{ animationDelay: `${i * 0.2 + 1}s` }}
          />
        ))}
      </div>
    </div>
    
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl mb-2 animate-bounce" style={{ animationDelay: '1s' }}>
        🎬
      </div>
      <div className="text-sm text-slate-300">Editor</div>
    </div>
  </div>
);

const PlatformGrid = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { platform: 'YouTube', users: '5M+', content: 'Vídeos musicais', color: 'from-red-500 to-red-600' },
      { platform: 'Niconico', users: '2M+', content: 'Origem japonesa', color: 'from-blue-500 to-blue-600' },
      { platform: 'SoundCloud', users: '1M+', content: 'Música independente', color: 'from-orange-500 to-orange-600' },
      { platform: 'Discord', users: '500K+', content: 'Comunidades ativas', color: 'from-indigo-500 to-indigo-600' },
      { platform: 'Twitter', users: '3M+', content: 'Updates e arte', color: 'from-cyan-500 to-cyan-600' },
      { platform: 'Pixiv', users: '800K+', content: 'Fanart e ilustrações', color: 'from-pink-500 to-pink-600' }
    ].map((item) => (
      <div key={item.platform} className="glass-effect rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
        <div className={`w-full h-2 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-pulse`}></div>
        <h3 className="text-lg font-bold text-white">{item.platform}</h3>
        <div className="text-sm text-cyan-300 mb-1">{item.users} usuários</div>
        <p className="text-xs text-slate-300">{item.content}</p>
      </div>
    ))}
  </div>
);

export const ComunidadePage: React.FC = () => {
  return (
    <PageWrapper title="👥 Comunidade" titleIcon={<CommunityIcon />}>
      <ContentCard title="A Rede Global Vocaloid">
        <NetworkNodes />
        <p className="mt-6">
          A comunidade Vocaloid é uma das redes criativas mais vibrantes e colaborativas do mundo digital. 
          Conectando milhões de produtores, artistas, cantores, editores e fãs ao redor do globo, 
          esta comunidade transcende fronteiras geográficas e culturais.
        </p>
        <p className="mt-3">
          O que torna esta comunidade única é sua natureza descentralizada e colaborativa, onde qualquer 
          pessoa pode contribuir com suas habilidades e paixão, criando um ecossistema criativo autossustentável.
        </p>
      </ContentCard>

      <ContentCard title="Números da Comunidade">
        <CommunityStats />
        <div className="mt-6 text-center">
          <p className="text-slate-300 mb-4">
            A comunidade Vocaloid representa uma das maiores concentrações de criatividade digital colaborativa já vista, 
            com participação ativa 24 horas por dia em todos os fusos horários.
          </p>
          <div className="glass-effect rounded-xl p-6 border border-purple-500/20">
            <div className="text-4xl mb-4 animate-pulse">🌟</div>
            <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">
              Uma Nova Era de Colaboração
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Onde a tecnologia encontra a criatividade humana
            </p>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Tipos de Colaboradores">
        <CollaborationFlow />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: 'Produtores Musicais', description: 'Criam composições originais', icon: '🎼', color: 'from-purple-400 to-pink-400' },
            { role: 'Artistas Visuais', description: 'Ilustrações e animações', icon: '🎨', color: 'from-cyan-400 to-blue-400' },
            { role: 'Tradutores', description: 'Legendas e adaptações', icon: '🌐', color: 'from-green-400 to-teal-400' },
            { role: 'Performers', description: 'Covers e danças', icon: '🎭', color: 'from-yellow-400 to-orange-400' }
          ].map((item) => (
            <div key={item.role} className="text-center glass-effect rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
              <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
                {item.role}
              </h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Plataformas Principais">
        <PlatformGrid />
        <div className="mt-8 text-center">
          <p className="text-slate-300 mb-4">
            Cada plataforma oferece um espaço único para diferentes tipos de conteúdo e interação, 
            criando um ecossistema diversificado onde todos podem encontrar seu lugar.
          </p>
        </div>
      </ContentCard>

      <ContentCard title="Eventos e Colaborações">
        <div className="relative w-full h-32 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-xl overflow-hidden border border-cyan-500/30 mb-6">
          <div className="absolute inset-0 flex items-center justify-center space-x-4">
            <div className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🎪</div>
            <div className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎵</div>
            <div className="text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🎨</div>
            <div className="text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>🌟</div>
          </div>
          <div className="absolute top-4 left-4 text-cyan-300 text-sm font-mono">EVENTOS GLOBAIS</div>
          <div className="absolute bottom-4 right-4 text-purple-300 text-sm font-mono">365 DIAS/ANO</div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Eventos Regulares
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Concursos de composição mensais</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Colaborações temáticas sazonais</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Streams comunitárias semanais</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Projetos Especiais
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Álbuns colaborativos internacionais</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Projetos beneficentes globais</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Celebrações de aniversário da Miku</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="O Futuro da Comunidade">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4 animate-pulse">🚀</div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Crescimento Exponencial
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center glass-effect rounded-xl p-6 border border-cyan-500/20">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="text-cyan-300 font-semibold mb-2">IA Colaborativa</h4>
            <p className="text-slate-300 text-sm">Ferramentas de IA para facilitar colaborações mais complexas</p>
          </div>
          
          <div className="text-center glass-effect rounded-xl p-6 border border-purple-500/20">
            <div className="text-3xl mb-3">🌐</div>
            <h4 className="text-purple-300 font-semibold mb-2">Metaverso Musical</h4>
            <p className="text-slate-300 text-sm">Espaços virtuais para encontros e colaborações em tempo real</p>
          </div>
          
          <div className="text-center glass-effect rounded-xl p-6 border border-pink-500/20">
            <div className="text-3xl mb-3">💫</div>
            <h4 className="text-pink-300 font-semibold mb-2">Expansão Global</h4>
            <p className="text-slate-300 text-sm">Maior inclusão de culturas e idiomas emergentes</p>
          </div>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
