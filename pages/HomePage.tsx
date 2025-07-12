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

const AnimatedLyrics: React.FC = () => {
  const [currentLyricIndex, setCurrentLyricIndex] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const [shuffledLyrics, setShuffledLyrics] = React.useState<typeof mikuLyrics>([]);

  const mikuLyrics = [
    {
      text: "🌸 'Mil cerejeiras, em meio à noite. Sua voz nem mesmo alcança aqui. Aqui é um banquete, uma jaula de aço' 🌸",
      song: "- Senbonzakura",
      gradient: "from-pink-400 via-red-400 to-rose-400"
    },
    {
      text: "🎵 'Palavras que quero te dizer, sons que quero te dar. Laços de sentimentos formam um mundo, conectando tudo, conectando a todo lugar' 🎵",
      song: "- Tell Your World",
      gradient: "from-cyan-400 via-blue-400 to-purple-400"
    },
    {
      text: "💫 'Eu quero cantar... ain... ainda... eu quero cantar...' 💫",
      song: "- The Disappearance of Hatsune Miku",
      gradient: "from-purple-400 via-cyan-400 to-blue-400"
    },
    {
      text: "👑 'Eu sou a princesa número 1 do mundo. E é assim que você vai me tratar, entendeu?' 👑",
      song: "- World is Mine",
      gradient: "from-pink-400 via-purple-400 to-cyan-400"
    },
    {
      text: "⚔️ 'Vou começar, isto é uma guerra! Ter que ver você parecendo tão feliz! Um amor fervoroso, isso é um pecado. Eu vou te mostrar os meus sentimentos!' ⚔️",
      song: "- Koi wa Sensou",
      gradient: "from-red-400 via-pink-400 to-purple-400"
    },
    {
      text: "🔄 'Mais uma vez, mais uma vez. \"Eu vou continuar rolando hoje também,\" A menina diz, a menina diz, enquanto entoa significado em suas palavras!' 🔄",
      song: "- Rolling Girl",
      gradient: "from-green-400 via-cyan-400 to-blue-400"
    },
    {
      text: "🌟 'Vamos cantar e dançar, feliz aniversário. Vamos plantar uma macieira no deserto. Dar uma cambalhota e então, adeus. Depois, deixem que outra pessoa faça o que quiser' 🌟",
      song: "- Suna no Wakusei",
      gradient: "from-yellow-400 via-orange-400 to-red-400"
    },
    {
      text: "👻 'Mayday! Mesmo que você perceba que sou eu, não precisa mais me abraçar, está tudo bem. Ei, Mayday! Se você entender quem eu sou, você zombaria de mim mais uma vez?' 👻",
      song: "- Ghost Rule",
      gradient: "from-gray-400 via-purple-400 to-indigo-400"
    }
  ];

  // Função para embaralhar array
  const shuffleArray = (array: typeof mikuLyrics) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Inicializar array embaralhado
  React.useEffect(() => {
    setShuffledLyrics(shuffleArray(mikuLyrics));
  }, []);

  // Função para calcular tempo baseado no tamanho do texto
  const calculateDisplayTime = (text: string) => {
    const baseTime = 4000; // 4 segundos base
    const textLength = text.length;
    // Adiciona tempo extra para textos longos (aproximadamente 100ms por caractere extra após 100 chars)
    const extraTime = textLength > 100 ? (textLength - 100) * 50 : 0;
    return Math.max(baseTime, baseTime + extraTime);
  };

  React.useEffect(() => {
    if (shuffledLyrics.length === 0) return;
    
    const currentText = shuffledLyrics[currentLyricIndex].text;
    const displayTime = calculateDisplayTime(currentText);
    
    const timeout = setTimeout(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        const nextIndex = currentLyricIndex + 1;
        
        // Se chegou ao final do array, embaralha novamente
        if (nextIndex >= shuffledLyrics.length) {
          setShuffledLyrics(shuffleArray(mikuLyrics));
          setCurrentLyricIndex(0);
        } else {
          setCurrentLyricIndex(nextIndex);
        }
        
        setIsVisible(true);
      }, 600); // Tempo de transição mais suave
    }, displayTime);

    return () => clearTimeout(timeout);
  }, [currentLyricIndex, shuffledLyrics, mikuLyrics]);

  // Proteção para quando o array ainda não foi embaralhado
  if (shuffledLyrics.length === 0) {
    return <div className="min-h-[140px]"></div>;
  }

  const currentLyric = shuffledLyrics[currentLyricIndex];

  return (
    <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 min-h-[140px] flex flex-col justify-center">
      <div 
        className={`transition-all duration-600 ease-in-out transform ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        <p className="text-slate-300">
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentLyric.gradient} font-bold neon-glow block mb-3 leading-relaxed`}>
            {currentLyric.text}
          </span>
          <span className="text-sm sm:text-base md:text-lg text-slate-400 font-light italic block">
            {currentLyric.song}
          </span>
        </p>
      </div>
      
      {/* Animated music notes */}
      <div className="flex justify-center mt-6 space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`text-cyan-400/60 text-lg transition-all duration-300 ${
              isVisible ? 'animate-bounce opacity-100' : 'opacity-30'
            }`}
            style={{ 
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          >
            ♪
          </div>
        ))}
      </div>
    </div>
  );
};

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

        {/* Animated lyrics subtitle */}
        <AnimatedLyrics />

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