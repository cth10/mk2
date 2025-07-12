
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';

const MusicIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
  </svg>
);

const NoteVisualizer = () => (
  <div className="relative h-32 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center space-x-2">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-2 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full animate-bounce"
          style={{
            height: `${Math.random() * 60 + 20}px`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1.5s'
          }}
        />
      ))}
    </div>
    <div className="absolute top-4 left-4 text-cyan-300 text-sm">♪ ♫ ♪</div>
    <div className="absolute bottom-4 right-4 text-purple-300 text-sm">♫ ♪ ♫</div>
  </div>
);

const WaveForm = () => (
  <div className="flex items-center justify-center h-20 space-x-1">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="w-1 bg-gradient-to-t from-pink-500 to-cyan-500 rounded-full animate-pulse"
        style={{
          height: `${Math.sin(i * 0.5) * 30 + 40}px`,
          animationDelay: `${i * 0.1}s`
        }}
      />
    ))}
  </div>
);

export const MusicaPage: React.FC = () => {
  return (
    <PageWrapper title="🎵 Música Vocaloid" titleIcon={<MusicIcon />}>
      <ContentCard title="O Universo Musical de Hatsune Miku">
        <NoteVisualizer />
        <p className="mt-6">
          A música Vocaloid revolucionou a criação musical, permitindo que qualquer pessoa com criatividade 
          e dedicação possa compor e produzir canções com vozes sintéticas de alta qualidade. Hatsune Miku 
          se tornou o símbolo desta revolução musical digital.
        </p>
        <p className="mt-3">
          Com milhões de composições criadas pela comunidade global, o universo musical Vocaloid abrange 
          todos os gêneros imagináveis: do J-Pop ao metal, da música eletrônica às baladas emotivas.
        </p>
      </ContentCard>

      <ContentCard title="Gêneros Musicais Populares">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { genre: 'J-Pop', color: 'from-pink-400 to-purple-400', description: 'Pop japonês moderno' },
            { genre: 'Eletrônica', color: 'from-cyan-400 to-blue-400', description: 'Sons futurísticos' },
            { genre: 'Rock', color: 'from-red-400 to-orange-400', description: 'Energia e intensidade' },
            { genre: 'Balada', color: 'from-green-400 to-teal-400', description: 'Melodias emotivas' },
            { genre: 'Metal', color: 'from-gray-400 to-slate-400', description: 'Poder e agressividade' },
            { genre: 'Folk', color: 'from-yellow-400 to-amber-400', description: 'Tradição modernizada' }
          ].map((item) => (
            <div key={item.genre} className="glass-effect rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className={`w-full h-2 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-pulse`}></div>
              <h3 className="text-lg font-bold text-white mb-2">{item.genre}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Processo de Criação Musical">
        <WaveForm />
        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold">1</div>
            <div>
              <h4 className="text-cyan-300 font-semibold">Composição</h4>
              <p className="text-slate-300 text-sm">Criação da melodia e harmonia base</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold">2</div>
            <div>
              <h4 className="text-purple-300 font-semibold">Letra</h4>
              <p className="text-slate-300 text-sm">Escrita das palavras e adaptação fonética</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">3</div>
            <div>
              <h4 className="text-pink-300 font-semibold">Produção</h4>
              <p className="text-slate-300 text-sm">Mixagem, masterização e efeitos</p>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Impacto Cultural Musical">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Democratização da Música
            </h3>
            <p className="text-slate-300">
              O Vocaloid quebrou barreiras tradicionais da indústria musical, permitindo que criadores 
              independentes alcancem audiências globais sem necessidade de gravadoras ou estúdios caros.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Colaboração Global
            </h3>
            <p className="text-slate-300">
              Artistas de diferentes países colaboram facilmente, criando fusões únicas de estilos 
              musicais e culturas através da plataforma Vocaloid.
            </p>
          </div>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
