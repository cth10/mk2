
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { HomeIcon, SparklesIcon, InfoIcon, MikuBrandIcon } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-cyan-900/20 to-pink-900/30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/60 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-cyan-300/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-300/50 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-pink-300/50 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <MikuBrandIcon className="w-24 h-24 sm:w-32 sm:h-32 text-cyan-400 animate-float drop-shadow-2xl" />
            <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter mb-6 font-noto-jp">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 neon-glow animate-fade-in">
            初音ミク
          </span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-light tracking-wider text-slate-300 mt-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            FAN HUB PORTAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
          Mergulhe no universo holográfico da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">diva virtual</span> mais icônica do mundo
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <button 
            onClick={() => document.getElementById('main-content-start')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative glass-effect px-12 py-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cyber-border"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 group-hover:from-cyan-200 group-hover:to-purple-200">
              Explorar o Mundo Miku ✨
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSectionClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <HeroSection />
      <PageWrapper title="Bem-vindo ao Fan Hub!" titleIcon={<HomeIcon />} className="pt-0" id="main-content-start">
        <ContentCard title="✨ Olá! Mergulhe no Mundo da Miku">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/3 relative group">
              <img
                src="/miku1.jpg"
                alt="Arte oficial de Hatsune Miku (NT Design)" 
                className="rounded-2xl shadow-2xl w-full max-w-md object-contain aspect-[3/4] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <p className="text-xl leading-relaxed">
                Este é o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">portal definitivo</span> dedicado à icônica diva virtual: <span className="font-noto-jp text-cyan-300 font-semibold">初音ミク</span>! 
              </p>
              <p className="text-lg text-slate-300">
                Aqui, você encontrará um tesouro de informações, curiosidades e muito mais sobre Miku e o fascinante universo Vocaloid.
              </p>
              
              <div className="glass-effect rounded-xl p-6 border border-purple-500/20">
                <p className="mb-4 text-purple-300 font-semibold">🔍 Navegue pelas seções para descobrir:</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center group cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                    <SparklesIcon className="w-6 h-6 mr-4 text-cyan-400 group-hover:animate-sparkle" />
                    A história e perfil detalhado da Miku
                  </li>
                  <li className="flex items-center group cursor-pointer hover:text-purple-300 transition-colors duration-300">
                    <InfoIcon className="w-6 h-6 mr-4 text-purple-400 group-hover:animate-sparkle" />
                    Como funciona a inovadora tecnologia Vocaloid
                  </li>
                  <li className="flex items-center group cursor-pointer hover:text-pink-300 transition-colors duration-300">
                    <MikuBrandIcon className="w-6 h-6 mr-4 text-pink-400 group-hover:animate-sparkle" />
                    O legado cultural e impacto mundial da nossa diva
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="🎵 O Fenômeno Cultural">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                Desde 2007, Hatsune Miku revolucionou a indústria musical, democratizando a criação musical e inspirando milhões de artistas ao redor do mundo.
              </p>
              <div className="glass-effect rounded-lg p-4 border border-cyan-500/20">
                <h4 className="text-cyan-300 font-semibold mb-2">💫 Marcos Importantes:</h4>
                <ul className="text-sm space-y-1 text-slate-300">
                  <li>• Mais de 1 milhão de músicas criadas</li>
                  <li>• Concertos holográficos épicos</li>
                  <li>• Comunidade global de produtores</li>
                  <li>• Influência na cultura pop japonesa</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg">
                Explore cada seção do nosso hub para uma jornada completa pelo universo virtual mais cativante da era digital!
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Música', path: '/musica' },
                  { name: 'Arte', path: '/arte' },
                  { name: 'Tecnologia', path: '/tecnologia' },
                  { name: 'Cultura', path: '/cultura' },
                  { name: 'Comunidade', path: '/comunidade' }
                ].map((section, index) => (
                  <button 
                    key={section.name}
                    onClick={() => handleSectionClick(section.path)}
                    className="px-3 py-1 text-sm glass-effect rounded-full border border-purple-400/30 text-purple-300 hover:border-purple-400/60 hover:bg-purple-400/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>
      </PageWrapper>
    </>
  );
};
