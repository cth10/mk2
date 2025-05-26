import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { MikuBrandIcon, HomeIcon, InfoIcon, SparklesIcon } from '../constants'; // Changed MikuOutlineIcon to MikuBrandIcon

// Hero Section Component
const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div 
      className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center p-4 rounded-b-3xl overflow-hidden mb-12 sm:mb-16 animate-fadeIn"
      style={{
        backgroundImage: "url('https://images8.alphacoders.com/135/thumb-1920-1350559.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%', // Adjust to focus on Miku
        backgroundAttachment: 'fixed', // Parallax like effect
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
      <div className="relative z-10 animate-textFocusIn">
        <MikuBrandIcon className="w-24 h-24 sm:w-32 sm:h-32 text-teal-300 mx-auto mb-6 opacity-80" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="block bg-gradient-to-r from-teal-300 via-sky-300 to-pink-300 text-transparent bg-clip-text">Hatsune Miku</span>
          <span className="block text-slate-200 mt-2">Fan Hub</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8">
          Explore o universo da diva virtual que encantou o mundo.
        </p>
        <button
          onClick={() => document.getElementById('main-content-start')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400/50"
        >
          Descobrir Mais
        </button>
      </div>
       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};


export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <PageWrapper title="Bem-vindo ao Fan Hub!" titleIcon={<HomeIcon />} className="pt-0" id="main-content-start">
        <ContentCard title="Olá! Mergulhe no Mundo da Miku">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <img
              src="/miku1.jpg"
              alt="Arte oficial de Hatsune Miku (NT Design)" 
              className="rounded-xl shadow-2xl w-full lg:w-1/3 max-w-md object-contain aspect-[3/4] transition-transform duration-300 hover:scale-105"
            />
            <div className="lg:w-2/3">
              <p className="text-lg mb-4">
                Este é o seu portal definitivo dedicado à icônica diva virtual: Hatsune Miku! 
                Aqui, você encontrará um tesouro de informações, curiosidades e muito mais sobre Miku e o fascinante universo Vocaloid.
              </p>
              <p className="mb-3">
                Navegue pelas seções para descobrir:
              </p>
              <ul className="list-none space-y-2 text-slate-300 mb-6">
                <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0"/>A história e perfil detalhado da Miku.</li>
                <li className="flex items-center"><InfoIcon className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0"/>Como funciona a inovadora tecnologia Vocaloid.</li>
                <li className="flex items-center"><MikuBrandIcon className="w-5 h-5 mr-3 text-teal-400 flex-shrink-0"/>O incrível legado e o impacto cultural duradouro de Miku.</li>
              </ul>
              <p className="text-md italic text-teal-300">
                Prepare-se para uma jornada imersiva no mundo azul-turquesa da nossa cantora digital favorita!
              </p>
            </div>
          </div>
        </ContentCard>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-10">
          <ContentCard title="Conheça Hatsune Miku">
            <div className="text-center">
              <MikuBrandIcon className="w-20 h-20 text-teal-400 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <p className="text-center mb-6">
              Hatsune Miku (初音ミク) é mais do que um software; ela é um ícone cultural. 
              Descubra sua origem, personalidade e o que a torna tão especial.
            </p>
            <div className="text-center">
              <button
                onClick={() => navigate('/sobre-miku')}
                className="inline-block mt-2 bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-teal-400 font-semibold"
              >
                Ver Perfil Detalhado
              </button>
            </div>
          </ContentCard>
          <ContentCard title="Decifre o Vocaloid">
            <div className="text-center">
            <InfoIcon className="w-20 h-20 text-pink-400 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <p className="text-center mb-6">
              Vocaloid é a tecnologia que dá voz a Miku e a outros cantores virtuais. 
              Entenda como essa síntese de voz revolucionou a música.
            </p>
            <div className="text-center">
              <button
                onClick={() => navigate('/sobre-vocaloid')}
                className="inline-block mt-2 bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-pink-400 font-semibold"
              >
                Explorar Tecnologia
              </button>
            </div>
          </ContentCard>
        </div>
      </PageWrapper>
    </>
  );
};