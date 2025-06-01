import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { HomeIcon, SparklesIcon, InfoIcon, MikuBrandIcon } from '../constants';

// Ícones SVG codificados manualmente - estilo otaku dev
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const MusicNoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3V13.55A4 4 0 1 0 14 17V7H18V5H14V3H12ZM10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
  </svg>
);

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
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-4 sm:mb-6 font-noto-jp px-2">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 neon-glow animate-fade-in">
            初音ミク
          </span>
          <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wider text-slate-300 mt-1 sm:mt-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            FAN HUB PORTAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '1s' }}>
          Mergulhe no universo holográfico da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">diva virtual</span> mais icônica do mundo
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in px-4" style={{ animationDelay: '1.5s' }}>
          <button 
            onClick={() => document.getElementById('main-content-start')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative glass-effect px-6 xs:px-8 sm:px-12 py-4 xs:py-5 sm:py-6 rounded-xl sm:rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cyber-border w-full xs:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-lg xs:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 group-hover:from-cyan-200 group-hover:to-purple-200">
              Explorar o Mundo Miku <SparkleIcon className="inline w-5 h-5 ml-1" />
            </span>
          </button>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
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
      <PageWrapper title="Bem-vindo ao Mundo de Hatsune Miku - Fan Hub Brasil" titleIcon={<HomeIcon />} className="pt-8 mt-8" id="main-content-start">
        <ContentCard title={<><SparkleIcon className="inline w-6 h-6 mr-2 text-cyan-400" />Olá! Mergulhe no Mundo da Miku</>}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-4">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Este é o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold">portal definitivo</span> dedicado à icônica diva virtual: <span className="font-noto-jp text-cyan-300 font-semibold">初音ミク</span>! 
                </p>
                <p className="text-base sm:text-lg text-slate-300">
                  Aqui, você encontrará um tesouro de informações, curiosidades e muito mais sobre Miku e o fascinante universo Vocaloid.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6 border border-purple-500/20">
                <p className="mb-4 text-purple-300 font-semibold"><SearchIcon className="inline w-5 h-5 mr-2" />Navegue pelas seções para descobrir:</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center group cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                    <SparklesIcon className="w-6 h-6 mr-4 text-cyan-400 group-hover:animate-sparkle flex-shrink-0" />
                    <span>A história e perfil detalhado da Miku</span>
                  </li>
                  <li className="flex items-center group cursor-pointer hover:text-purple-300 transition-colors duration-300">
                    <InfoIcon className="w-6 h-6 mr-4 text-purple-400 group-hover:animate-sparkle flex-shrink-0" />
                    <span>Como funciona a inovadora tecnologia Vocaloid</span>
                  </li>
                  <li className="flex items-center group cursor-pointer hover:text-pink-300 transition-colors duration-300">
                    <MikuBrandIcon className="w-6 h-6 mr-4 text-pink-400 group-hover:animate-sparkle flex-shrink-0" />
                    <span>O legado cultural e impacto mundial da nossa diva</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <img
                src="/miku1.jpg"
                alt="Arte oficial de Hatsune Miku (NT Design)" 
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-md mx-auto object-contain aspect-[3/4] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </ContentCard>

        <ContentCard title={<><MusicNoteIcon className="inline w-6 h-6 mr-2 text-purple-400" />O Fenômeno Cultural</>}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Desde 2007, Hatsune Miku revolucionou a indústria musical, democratizando a criação musical e inspirando milhões de artistas ao redor do mundo.
              </p>
              
              <div className="glass-effect rounded-xl p-6 border border-cyan-500/20">
                <h4 className="text-cyan-300 font-semibold mb-4 text-lg flex items-center">
                  <StarIcon className="inline w-5 h-5 mr-2" />
                  Marcos Importantes
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Mais de 1 milhão de músicas criadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Concertos holográficos épicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Comunidade global de produtores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Influência na cultura pop japonesa</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed">
                Explore cada seção do nosso hub para uma jornada completa pelo universo virtual mais cativante da era digital!
              </p>
              
              <div className="glass-effect rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold mb-4 text-lg">
                  Seções Principais
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { name: 'Música', path: '/musica', color: 'from-cyan-400 to-blue-400' },
                    { name: 'Arte', path: '/arte', color: 'from-purple-400 to-pink-400' },
                    { name: 'Tecnologia', path: '/tecnologia', color: 'from-green-400 to-cyan-400' },
                    { name: 'Cultura', path: '/cultura', color: 'from-pink-400 to-rose-400' },
                    { name: 'Comunidade', path: '/comunidade', color: 'from-yellow-400 to-orange-400' }
                  ].map((section, index) => (
                    <button 
                      key={section.name}
                      onClick={() => handleSectionClick(section.path)}
                      className={`w-full p-3 rounded-lg glass-effect border border-purple-400/30 text-left transition-all duration-300 cursor-pointer transform hover:scale-105 group`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${section.color} font-semibold group-hover:text-white transition-all duration-300`}>
                        {section.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContentCard>
      </PageWrapper>
    </>
  );
};