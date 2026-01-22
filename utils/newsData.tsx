import React from 'react';
import { NewsIcon, MikuBrandIcon } from '../components/Icons';

export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  date: string; // Short date for card e.g. "Janeiro 2026"
  fullDate: string; // Detail page date
  category: string;
  featured: boolean;
  content: React.ReactNode;
}

export const newsData: NewsArticle[] = [
  {
    slug: 'magical-mirai-2026-anuncio',
    title: 'Magical Mirai 2026: Turnê em Três Cidades Confirmada',
    summary: 'A turnê "Magical Mirai 2026" foi confirmada oficialmente. Este ano, o evento será realizado em Hamamatsu, Osaka e Tóquio, expandindo a celebração para mais fãs.',
    date: 'Janeiro 2026',
    fullDate: 'Janeiro 2026',
    category: 'Eventos',
    featured: true,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <NewsIcon className="w-6 h-6 text-white" />
              </div>
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">Expansão da Turnê</h2>
              <p className="text-slate-400">Três cidades receberão o evento este ano</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            A Crypton Future Media anunciou oficialmente a realização do <strong>Magical Mirai 2026</strong>. 
            Seguindo o sucesso das edições anteriores, a turnê deste ano passará por três grandes cidades japonesas: 
            <strong>Hamamatsu</strong>, <strong>Osaka</strong> e <strong>Tóquio</strong>.
          </p>
        </div>
        
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
             O evento, que combina shows ao vivo com uma exposição criativa dedicada à cultura de criação de fãs, continua a evoluir. 
             A escolha de Hamamatsu como uma das sedes traz o evento para a cidade conhecida musicalmente como o berço de muitos instrumentos da Yamaha, fortalecendo a conexão com as origens do Vocaloid.
          </p>
          <p className="text-slate-300 leading-relaxed">
             O concurso de músicas para o Magical Mirai 2026 foi concluído em dezembro de 2025, e a música tema vencedora deve ser anunciada em breve, definindo o tom e o tema visual para toda a turnê.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'snow-miku-2026-patisserie',
    title: 'Snow Miku 2026: Tema "Happiness Patisserie"',
    summary: 'O festival Snow Miku 2026 está acontecendo em Hokkaido com o tema "Happiness Patisserie". O visual principal foi ilustrado por Buta, e novas colaborações foram anunciadas.',
    date: 'Janeiro 2026',
    fullDate: 'Janeiro 2026',
    category: 'Cultura',
    featured: true,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
           <div className="flex items-center space-x-3 mb-4">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <NewsIcon className="w-6 h-6 text-white" />
              </div>
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">Doçura no Inverno</h2>
              <p className="text-slate-400">Snow Miku 2026 "Happiness Patisserie"</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            O festival anual de inverno em Hokkaido, <strong>Snow Miku 2026</strong>, já começou, trazendo calor e doçura para a estação fria. 
            O tema deste ano, escolhido pelos fãs, é <strong>"Happiness Patisserie"</strong> (Confeitaria da Felicidade).
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            O visual principal, ilustrado pelo artista <strong>Buta (ぶーた)</strong>, apresenta Snow Miku em um traje adorável inspirado em confeiteiros, repleto de detalhes açucarados e cores suaves.
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">Destaques do Festival</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
               <li>Lançamento do CD oficial <em>"Fukashigi Pralinage"</em> feat. Hatsune Miku.</li>
               <li>Novas colaborações exclusivas com a Sanrio, apresentando Kuromi.</li>
               <li>Abertura da exposição central em Sapporo.</li>
            </ul>
          </div>
        </div>
      </>
    )
  },
  {
    slug: 'miku-expo-2026-na',
    title: 'HATSUNE MIKU EXPO 2026 América do Norte',
    summary: 'A "HATSUNE MIKU EXPO 2026" foi listada para a América do Norte, marcando o retorno da turnê mundial à região após a edição de 2024.',
    date: 'Janeiro 2026',
    fullDate: 'Janeiro 2026',
    category: 'Música',
    featured: false,
    content: (
      <>
         <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">O Retorno da Miku Expo</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Fãs da América do Norte podem comemorar: a <strong>HATSUNE MIKU EXPO 2026</strong> está confirmada para a região. 
            Após a turnê de 2024, Miku e seus amigos retornarão aos palcos internacionais no início de 2026.
          </p>
        </div>
        <p className="text-slate-300 leading-relaxed mb-4">
          A turnê mundial continua a ser um dos principais meios de conectar a comunidade global de Vocaloid. 
          O visual principal para esta etapa da turnê foi criado por <strong>yon</strong>, trazendo uma estética futurista e vibrante.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Datas específicas e locais dos shows serão anunciados nas próximas semanas através do site oficial mikuexpo.com.
        </p>
      </>
    )
  },
  {
    slug: 'merch-colabs-jan-2026',
    title: 'Novas Colaborações e Merchandise de Janeiro',
    summary: 'Novas campanhas foram lançadas, incluindo figuras "Piapro Characters x Buildot" e produtos das músicas "MAGA MAGA" e "Love is Hellfire".',
    date: 'Janeiro 2026',
    fullDate: '22 Janeiro 2026',
    category: 'Comunidade',
    featured: false,
    content: (
       <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Colecionáveis e Novidades</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Janeiro de 2026 começa com uma onda de novos produtos oficiais. O destaque vai para a nova linha de figuras 
            <strong>Piapro Characters x Buildot Series</strong>, que reimagina os personagens em um estilo mecânico e detalhado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
           <div className="bg-slate-800/40 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Músicas em Destaque</h3>
              <p className="text-slate-300 text-sm">
                Novos itens baseados nas músicas de sucesso "MAGA MAGA" e "Love is Hellfire" já estão disponíveis na loja oficial, celebrando a diversidade musical da comunidade.
              </p>
           </div>
           <div className="bg-slate-800/40 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Snow Miku Time Signal</h3>
              <p className="text-slate-300 text-sm">
                Uma campanha especial está recrutando mensagens de voz dos fãs para serem transmitidas junto com o sinal horário de Snow Miku na cidade de Sapporo.
              </p>
           </div>
        </div>
      </>
    )
  },
  {
    slug: 'yamaha-20-anos',
    title: 'Celebração de 20 Anos e Novidades da Yamaha',
    summary: 'A Yamaha lançou um site especial para comemorar o 20º aniversário do VOCALOID. Este é um grande marco, celebrando duas décadas de música e criatividade impulsionadas por esta tecnologia.',
    date: 'Janeiro 2025',
    fullDate: 'Janeiro 2025',
    category: 'Tecnologia',
    featured: false,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <NewsIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyan-300">20º Aniversário do VOCALOID</h2>
                <p className="text-slate-400">Um marco histórico na síntese vocal</p>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              A Yamaha, desenvolvedora do software VOCALOID, lançou um site especial para comemorar o 20º aniversário do VOCALOID. 
              Este é um grande marco, celebrando duas décadas de música e criatividade impulsionadas por esta tecnologia revolucionária.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mr-3"></span>
                Atualizações do VOCALOID6
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Além da celebração, a empresa tem trabalhado ativamente em atualizações para a versão mais recente do seu editor, 
                o VOCALOID6. As atualizações mais recentes têm trazido de volta recursos clássicos e melhorias de performance.
              </p>
            </div>
          </div>
      </>
    )
  }
];
