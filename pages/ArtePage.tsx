
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';

const ArtIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
  </svg>
);

const ColorPalette = () => (
  <div className="flex space-x-2 justify-center my-6">
    {['bg-cyan-400', 'bg-purple-400', 'bg-pink-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400'].map((color, i) => (
      <div
        key={i}
        className={`w-8 h-8 ${color} rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-float`}
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);

const ArtCanvas = () => (
  <div className="relative w-full h-48 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border-2 border-purple-500/30">
    {/* Simulated artwork */}
    <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
    <div className="absolute top-12 right-12 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 transform rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
    <div className="absolute bottom-8 left-1/3 w-20 h-6 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
    <div className="absolute bottom-12 right-8 w-8 h-20 bg-gradient-to-t from-purple-400 to-cyan-400 rounded-lg transform rotate-12"></div>
    
    {/* Brush strokes effect */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-4 left-4 w-32 h-1 bg-cyan-400 transform rotate-12 rounded-full"></div>
      <div className="absolute top-16 right-8 w-24 h-1 bg-purple-400 transform -rotate-12 rounded-full"></div>
      <div className="absolute bottom-8 left-12 w-28 h-1 bg-pink-400 transform rotate-45 rounded-full"></div>
    </div>
  </div>
);

const DigitalBrush = () => (
  <div className="flex items-center justify-center space-x-4 my-6">
    <div className="relative">
      <div className="w-2 h-16 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full"></div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full border-2 border-amber-400"></div>
    </div>
    <div className="text-4xl animate-bounce">🎨</div>
    <div className="relative">
      <div className="w-2 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full"></div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full border-2 border-blue-400"></div>
    </div>
  </div>
);

export const ArtePage: React.FC = () => {
  return (
    <PageWrapper title="🎨 Arte Visual" titleIcon={<ArtIcon />}>
      <ContentCard title="O Mundo Artístico de Hatsune Miku">
        <ArtCanvas />
        <p className="mt-6">
          A arte visual é uma parte fundamental do fenômeno Vocaloid. Desde o design icônico de Hatsune Miku 
          até as milhares de fanarts criadas diariamente, a expressão artística floresce em todas as direções 
          dentro desta comunidade criativa.
        </p>
        <p className="mt-3">
          Artistas de todo o mundo contribuem com interpretações únicas dos personagens Vocaloid, 
          criando um universo visual rico e diversificado que transcende culturas e estilos.
        </p>
      </ContentCard>

      <ContentCard title="Estilos Artísticos Populares">
        <ColorPalette />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { style: 'Anime/Manga', description: 'Estilo japonês tradicional', gradient: 'from-pink-500 to-purple-500' },
            { style: 'Chibi', description: 'Versões fofas e pequenas', gradient: 'from-yellow-500 to-orange-500' },
            { style: 'Realista', description: 'Interpretações fotorrealistas', gradient: 'from-blue-500 to-cyan-500' },
            { style: 'Abstrato', description: 'Arte conceitual moderna', gradient: 'from-purple-500 to-pink-500' },
            { style: 'Pixel Art', description: 'Arte retro digitalizada', gradient: 'from-green-500 to-teal-500' },
            { style: 'Cyberpunk', description: 'Futurismo tecnológico', gradient: 'from-cyan-500 to-blue-500' }
          ].map((item) => (
            <div key={item.style} className="glass-effect rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className={`w-full h-20 bg-gradient-to-br ${item.gradient} rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold text-lg`}>
                {item.style}
              </div>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Ferramentas Digitais">
        <DigitalBrush />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Software de Arte Digital
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Photoshop - Edição profissional</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Clip Studio Paint - Desenho digital</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Procreate - Arte em tablets</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Técnicas Populares
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Shading celular - Sombras chapadas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Lighting digital - Iluminação dramática</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Mixed media - Técnicas combinadas</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Comunidade Artística">
        <div className="flex items-center justify-center space-x-8 my-6">
          <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>👨‍🎨</div>
          <div className="text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎨</div>
          <div className="text-6xl animate-bounce" style={{ animationDelay: '1s' }}>👩‍🎨</div>
        </div>
        <p className="text-center text-slate-300 mb-6">
          A comunidade artística Vocaloid é uma das mais ativas e colaborativas do mundo digital, 
          unindo artistas profissionais e amadores em celebração da criatividade.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center glass-effect rounded-lg p-4 border border-purple-500/20">
            <div className="text-2xl font-bold text-cyan-400">1M+</div>
            <div className="text-sm text-slate-300">Fanarts criadas</div>
          </div>
          <div className="text-center glass-effect rounded-lg p-4 border border-cyan-500/20">
            <div className="text-2xl font-bold text-purple-400">50K+</div>
            <div className="text-sm text-slate-300">Artistas ativos</div>
          </div>
          <div className="text-center glass-effect rounded-lg p-4 border border-pink-500/20">
            <div className="text-2xl font-bold text-pink-400">24/7</div>
            <div className="text-sm text-slate-300">Criação contínua</div>
          </div>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
