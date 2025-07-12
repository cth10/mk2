
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

// Ícone de paleta SVG otaku style
const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C14.24 4.42 12.13 4.17 10 4.58C6.03 5.31 3.28 8.59 3.92 12.97C4.43 16.41 7.4 19.16 10.82 19.58C12 19.73 13.13 19.57 14.19 19.25C15.37 18.9 16.42 18.32 17.31 17.5L19.91 20.1L21.41 18.6L17.58 14.77C17.85 14.37 18.09 13.95 18.3 13.5C19.16 11.5 19.16 9.5 18.3 7.5L21 9Z" />
  </svg>
);

const DigitalBrush = () => (
  <div className="flex items-center justify-center space-x-4 my-6">
    <div className="relative">
      <div className="w-2 h-16 bg-gradient-to-t from-amber-600 to-amber-400 rounded-full"></div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full border-2 border-amber-400"></div>
    </div>
    <PaletteIcon className="w-16 h-16 text-cyan-400 animate-bounce drop-shadow-lg" />
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
          <div className="animate-bounce" style={{ animationDelay: '0s' }}>
            <svg className="w-16 h-16 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1L13.5 2.5L16.17 5.17C14.24 4.42 12.13 4.17 10 4.58C6.03 5.31 3.28 8.59 3.92 12.97C4.43 16.41 7.4 19.16 10.82 19.58C12 19.73 13.13 19.57 14.19 19.25C15.37 18.9 16.42 18.32 17.31 17.5L19.91 20.1L21.41 18.6L17.58 14.77C17.85 14.37 18.09 13.95 18.3 13.5C19.16 11.5 19.16 9.5 18.3 7.5L21 9Z" />
            </svg>
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
            <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.5 3L8 4.5L10.5 7L12 5.5L9.5 3M6.5 6L5 7.5L7.5 10L9 8.5L6.5 6M2.5 10L1 11.5L3.5 14L5 12.5L2.5 10M7.5 18C9.43 18 11 16.43 11 14.5S9.43 11 7.5 11 4 12.57 4 14.5 5.57 18 7.5 18M16.5 6C18.43 6 20 4.43 20 2.5S18.43 -1 16.5 -1 13 .57 13 2.5 14.57 6 16.5 6M19.5 18C21.43 18 23 16.43 23 14.5S21.43 11 19.5 11 16 12.57 16 14.5 17.57 18 19.5 18Z" />
            </svg>
          </div>
          <div className="animate-bounce" style={{ animationDelay: '1s' }}>
            <svg className="w-16 h-16 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14M18 8L20 6L18 4L16 6L18 8M6 8L8 6L6 4L4 6L6 8M12 2L14 0L12 2L10 0L12 2Z" />
            </svg>
          </div>
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
