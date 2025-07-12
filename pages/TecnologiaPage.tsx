
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';

const TechIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
  </svg>
);

const CircuitBoard = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-slate-900 to-green-900 rounded-xl overflow-hidden border border-green-400/30">
    {/* Circuit paths */}
    <div className="absolute inset-4">
      <div className="w-full h-0.5 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute top-8 w-0.5 h-16 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-8 left-8 w-16 h-0.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-16 left-24 w-0.5 h-8 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-8 left-0 w-24 h-0.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
    
    {/* Circuit nodes */}
    <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute top-20 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-12 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-8 right-8 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
    <div className="absolute bottom-8 right-12 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
  </div>
);

const SynthWave = () => (
  <div className="relative w-full h-32 bg-gradient-to-b from-purple-900/50 to-cyan-900/50 rounded-xl overflow-hidden">
    <div className="absolute inset-0 flex items-end justify-center space-x-1">
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-full animate-pulse"
          style={{
            width: '6px',
            height: `${Math.sin(i * 0.4) * 40 + 50}px`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '2s'
          }}
        />
      ))}
    </div>
    <div className="absolute top-4 left-4 text-cyan-300 text-xs font-mono">SYNTH ENGINE ACTIVE</div>
    <div className="absolute top-4 right-4 text-purple-300 text-xs font-mono">VOCAL PROCESSING</div>
  </div>
);

const DataFlow = () => (
  <div className="flex items-center justify-between my-6">
    <div className="flex items-center space-x-2">
      <div className="w-12 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center text-black text-xs font-bold">
        INPUT
      </div>
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
    
    <div className="text-2xl text-purple-400 animate-spin" style={{ animationDuration: '3s' }}>⚙️</div>
    
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-400 rounded-full animate-ping"
            style={{ animationDelay: `${i * 0.2 + 1}s` }}
          />
        ))}
      </div>
      <div className="w-12 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-black text-xs font-bold">
        OUTPUT
      </div>
    </div>
  </div>
);

export const TecnologiaPage: React.FC = () => {
  return (
    <PageWrapper title="⚡ Tecnologia" titleIcon={<TechIcon />}>
      <ContentCard title="A Revolução da Síntese Vocal">
        <CircuitBoard />
        <p className="mt-6">
          A tecnologia por trás do Vocaloid representa um marco na evolução da síntese vocal computacional. 
          Utilizando técnicas avançadas de processamento de sinal digital e análise fonética, 
          o sistema consegue recriar vozes humanas com impressionante realismo e expressividade.
        </p>
        <p className="mt-3">
          O desenvolvimento desta tecnologia envolveu anos de pesquisa em linguística, acústica, 
          processamento de sinais e inteligência artificial, resultando em uma ferramenta que 
          democratizou a criação musical vocal.
        </p>
      </ContentCard>

      <ContentCard title="Como Funciona o Motor Vocaloid">
        <SynthWave />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Análise Fonética
            </h3>
            <p className="text-slate-300 text-sm">
              O sistema analisa gravações de voz humana, decompondo-as em unidades fonéticas básicas 
              chamadas fonemas. Cada fonema é catalogado com suas características acústicas únicas.
            </p>
            <div className="glass-effect rounded-lg p-3 border border-cyan-500/20">
              <div className="text-cyan-300 text-xs font-mono">FONEMA_ANÁLISE: [a], [i], [u], [e], [o]</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Síntese Concatenativa
            </h3>
            <p className="text-slate-300 text-sm">
              Os fonemas são recombinados usando algoritmos sofisticados que ajustam tom, duração, 
              intensidade e características tímbricas para criar novas palavras e frases.
            </p>
            <div className="glass-effect rounded-lg p-3 border border-purple-500/20">
              <div className="text-purple-300 text-xs font-mono">SÍNTESE: [a]+[ri]+[ga]+[to]+[u]</div>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Fluxo de Processamento">
        <DataFlow />
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
            <div>
              <h4 className="text-cyan-300 font-semibold">Entrada de Dados</h4>
              <p className="text-slate-300 text-sm">Texto em formato fonético + dados musicais (notas, ritmo, dinâmica)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
            <div>
              <h4 className="text-blue-300 font-semibold">Processamento</h4>
              <p className="text-slate-300 text-sm">Algoritmos de síntese combinam fonemas com parâmetros musicais</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold text-sm">3</div>
            <div>
              <h4 className="text-purple-300 font-semibold">Renderização</h4>
              <p className="text-slate-300 text-sm">Geração do arquivo de áudio final com a voz sintética</p>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Evolução Tecnológica">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { version: 'Vocaloid 1', year: '2004', features: 'Síntese básica', color: 'from-red-400 to-orange-400' },
            { version: 'Vocaloid 2', year: '2007', features: 'Melhoria qualidade', color: 'from-orange-400 to-yellow-400' },
            { version: 'Vocaloid 3', year: '2011', features: 'Multilíngue', color: 'from-yellow-400 to-green-400' },
            { version: 'Vocaloid 4', year: '2014', features: 'Expressividade', color: 'from-green-400 to-cyan-400' },
            { version: 'Vocaloid 5', year: '2018', features: 'IA integrada', color: 'from-cyan-400 to-blue-400' },
            { version: 'Vocaloid 6', year: '2022', features: 'Realismo extremo', color: 'from-blue-400 to-purple-400' }
          ].map((item) => (
            <div key={item.version} className="glass-effect rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className={`w-full h-2 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-pulse`}></div>
              <h3 className="text-lg font-bold text-white">{item.version}</h3>
              <div className="text-sm text-purple-300 mb-2">{item.year}</div>
              <p className="text-xs text-slate-300">{item.features}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard title="Futuro da Tecnologia Vocal">
        <div className="relative w-full h-24 bg-gradient-to-r from-purple-900/30 via-cyan-900/30 to-pink-900/30 rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-cyan-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C14.24 4.42 12.13 4.17 10 4.58C6.03 5.31 3.28 8.59 3.92 12.97C4.43 16.41 7.4 19.16 10.82 19.58C12 19.73 13.13 19.57 14.19 19.25C15.37 18.9 16.42 18.32 17.31 17.5L19.91 20.1L21.41 18.6L17.58 14.77C17.85 14.37 18.09 13.95 18.3 13.5C19.16 11.5 19.16 9.5 18.3 7.5L21 9ZM9 11C8.45 11 8 11.45 8 12S8.45 13 9 13 10 12.55 10 12 9.55 11 9 11ZM15 11C14.45 11 14 11.45 14 12S14.45 13 15 13 16 12.55 16 12 15.55 11 15 11Z" />
            </svg>
            <div className="mx-4 text-2xl text-cyan-400">→</div>
            <svg className="w-12 h-12 text-purple-400 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14S10 13.1 10 12V4C10 2.9 10.9 2 12 2ZM19 12C19 15.53 16.39 18.54 13 19.14V21H11V19.14C7.61 18.54 5 15.53 5 12H7C7 14.76 9.24 17 12 17S17 14.76 17 12H19Z" />
            </svg>
            <div className="mx-4 text-2xl text-purple-400">→</div>
            <svg className="w-12 h-12 text-yellow-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Inteligência Artificial
            </h3>
            <p className="text-slate-300">
              A próxima geração de Vocaloid incorporará IA avançada para aprendizado automático 
              de estilos vocais, permitindo adaptação dinâmica e expressividade ainda mais natural.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Realidade Virtual
            </h3>
            <p className="text-slate-300">
              Integração com tecnologias de VR/AR permitirá interações em tempo real com 
              personagens virtuais, criando experiências musicais completamente imersivas.
            </p>
          </div>
        </div>
      </ContentCard>
    </PageWrapper>
  );
};
