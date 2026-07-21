import React from 'react';
import { NewsIcon } from '../components/Icons';

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
    slug: 'magical-mirai-2026',
    title: 'Magical Mirai 2026 Começa em Hamamatsu no Dia 24 de Julho',
    summary: 'A 14ª edição do Magical Mirai abre a turnê em Hamamatsu (24 a 26 de julho), seguindo para Osaka e Tóquio. A música tema "Sora ni Menjite", de Kasamura Tota, e o álbum oficial já foram lançados.',
    date: 'Julho 2026',
    fullDate: '21 Julho 2026',
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
              <h2 className="text-2xl font-bold text-cyan-300">A Turnê Está Começando</h2>
              <p className="text-slate-400">Tema "Mizuumi no Sonare" (Sonare do Lago)</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            O <strong>Magical Mirai 2026</strong>, principal evento de Hatsune Miku, chega à sua 14ª edição com o tema 
            <strong>"Mizuumi no Sonare" (湖のソナーレ)</strong>. Pela primeira vez na história, a turnê abre em 
            <strong>Hamamatsu</strong>, cidade ligada à indústria de instrumentos musicais, com shows de <strong>24 a 26 de julho</strong> no Act City Hamamatsu.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">Datas da Turnê</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
               <li><strong>Hamamatsu:</strong> 24 a 26 de julho — Act City Hamamatsu</li>
               <li><strong>Osaka:</strong> 14 a 16 de agosto — Intex Osaka</li>
               <li><strong>Tóquio:</strong> 28 a 30 de agosto — Makuhari Messe</li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed">
             A música tema oficial é <strong>"Sora ni Menjite" (空に免じて)</strong>, composta por <strong>Kasamura Tota (傘村トータ)</strong> com 
             arranjo de <strong>Shimada Masanori</strong>. O clipe foi revelado em 19 de junho, e o <strong>álbum oficial do evento</strong> foi 
             lançado em 1º de julho. O visual principal da edição é do ilustrador <strong>Men (緜)</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed">
             Como de costume, o evento combina shows ao vivo com a exposição criativa dedicada à cultura de criação dos fãs, 
             um dos pontos de encontro mais importantes da comunidade Vocaloid no ano.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'miku-expo-2026-europa',
    title: 'MIKU EXPO 2026 Europa: Turnê Confirmada com Show em Lisboa',
    summary: 'A HATSUNE MIKU EXPO 2026 chega à Europa em novembro com tema Steampunk e oito paradas — incluindo Lisboa, no dia 27 de novembro. Shows extras foram adicionados após o anúncio inicial.',
    date: 'Abril 2026',
    fullDate: '8 Abril 2026',
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
              <h2 className="text-2xl font-bold text-cyan-300">Miku na Europa — e em Portugal!</h2>
              <p className="text-slate-400">Primeira Miku Expo na Europa em cerca de dois anos</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            A <strong>HATSUNE MIKU EXPO 2026 EUROPE</strong> foi anunciada em 24 de fevereiro e ganhou shows extras em 8 de abril. 
            Com o tema <strong>Steampunk</strong> e visual principal de <strong>Suzunosuke (鈴ノ助)</strong>, a turnê marca o retorno da 
            Miku Expo à Europa após cerca de dois anos — e a primeira passagem pela Espanha em seis anos.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">Agenda de Novembro de 2026</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
               <li><strong>12/11</strong> — Londres</li>
               <li><strong>14/11</strong> — Bruxelas</li>
               <li><strong>15/11</strong> — Amsterdã</li>
               <li><strong>17/11</strong> — Berlim</li>
               <li><strong>20/11</strong> — Düsseldorf</li>
               <li><strong>22/11</strong> — Paris</li>
               <li><strong>24 e 25/11</strong> — Madri</li>
               <li><strong>27/11</strong> — <strong>Lisboa</strong></li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed">
            A parada de <strong>Lisboa, em 27 de novembro</strong>, é uma ótima notícia para os fãs de língua portuguesa: 
            é a chance de ver o show de projeção da Miku ao vivo sem sair da Península Ibérica. 
            Ingressos e detalhes de cada local estão disponíveis no site oficial mikuexpo.com.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'hokusai-hatsune-miku-rella',
    title: 'Hokusai × Hatsune Miku: Colaboração de Arte com Ilustrações de Rella',
    summary: 'Anunciada em 15 de julho, a colaboração une Miku a quatro obras da série "Trinta e Seis Vistas do Monte Fuji" de Katsushika Hokusai, incluindo "A Grande Onda de Kanagawa", em novas ilustrações de Rella.',
    date: 'Julho 2026',
    fullDate: '15 Julho 2026',
    category: 'Arte',
    featured: false,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Tradição e Vocaloid</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Uma nova colaboração oficial aproxima Hatsune Miku da arte tradicional japonesa: <strong>Katsushika Hokusai × Hatsune Miku</strong>. 
            O projeto, anunciado em 15 de julho, funde a cantora virtual a quatro obras da série de xilogravuras 
            <em>"Trinta e Seis Vistas do Monte Fuji"</em> — entre elas a famosa <strong>"A Grande Onda de Kanagawa"</strong> e 
            <strong>"Fine Wind, Clear Morning"</strong> (o "Fuji Vermelho").
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            As novas ilustrações são de <strong>Rella</strong>, artista conhecida da comunidade por trabalhos como a "Mikaeri Bijin Miku" 
            e visuais da Hatsune Miku Symphony.
          </p>
          <p className="text-slate-300 leading-relaxed">
            A linha de produtos, à venda desde 13 de julho, inclui pastas transparentes (clear files), pôsteres de tecido, 
            displays de acrílico e ímãs decorativos, todos estampando os encontros entre Miku e as paisagens de Hokusai.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'pokemon-miku-voltage-live-bluray',
    title: 'Pokémon feat. Hatsune Miku VOLTAGE Live! Ganha Blu-ray e Sessões em Cinemas',
    summary: 'O show do projeto "Pokémon feat. Hatsune Miku Project VOLTAGE" será lançado em Blu-ray em 26 de agosto, com sessões especiais 5.1ch em cinemas de Tóquio e Osaka nos dias 1º e 2 de agosto.',
    date: 'Julho 2026',
    fullDate: '8 Julho 2026',
    category: 'Música',
    featured: false,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
           <div className="flex items-center space-x-3 mb-4">
             <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <NewsIcon className="w-6 h-6 text-white" />
              </div>
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">VOLTAGE Live! para Assistir de Novo</h2>
              <p className="text-slate-400">Blu-ray em 26 de agosto e cinemas em agosto</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            O show ao vivo do projeto <strong>"Pokémon feat. Hatsune Miku Project VOLTAGE"</strong> terá uma <strong>edição especial em Blu-ray</strong>, 
            com lançamento marcado para <strong>26 de agosto de 2026</strong>. O anúncio foi feito em 8 de julho no blog oficial da Piapro.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            Antes disso, fãs no Japão poderão reviver a experiência em <strong>sessões especiais "cheer screening" com áudio 5.1ch</strong>, 
            nos dias <strong>1º e 2 de agosto</strong>, em quatro cinemas de Tóquio e Osaka. Serão 12 exibições, com ingressos a ¥2.200 — 
            e o público pode levar penlights e torcer junto, como em um show de verdade.
          </p>
          <p className="text-slate-300 leading-relaxed">
            O Project VOLTAGE uniu Miku aos tipos de Pokémon em uma série de músicas e ilustrações, e o show reúne esse repertório 
            no palco. O Blu-ray é a chance de a comunidade internacional conferir a apresentação completa.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'hatsune-miku-symphony-2026',
    title: 'Hatsune Miku Symphony 2026: 11ª Edição em Tóquio e marasy a Caminho',
    summary: 'A turnê sinfônica de 2026 passou por Sapporo e Tóquio (5 de julho, Suntory Hall). No show de Tóquio foi anunciado que o pianista marasy participará das edições de Yokohama (outubro) e Osaka (janeiro de 2027).',
    date: 'Julho 2026',
    fullDate: '5 Julho 2026',
    category: 'Eventos',
    featured: false,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Miku na Sala de Concerto</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            A <strong>Hatsune Miku Symphony 2026</strong>, 11ª edição da série que leva músicas de Vocaloid à orquestra, 
            realizou seu show de Tóquio em <strong>5 de julho no Suntory Hall</strong>, após passar por Sapporo em junho.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            Com foco no piano, a apresentação contou com a <strong>Orquestra Filarmônica de Tóquio</strong> regida por <strong>Hirofumi Kurita</strong> 
            e a pianista <strong>Kaoruko Igarashi</strong>, que executou o Concerto para Piano nº 2 de Rachmaninoff além de um medley 
            em formato de concerto com canções de Vocaloid. A mestre de cerimônias foi <strong>Saki Fujita</strong>, dubladora que dá voz à Miku.
          </p>
          <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">Próximas Datas Anunciadas</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
               <li><strong>Yokohama:</strong> 10 de outubro de 2026 — Pacifico Yokohama</li>
               <li><strong>Osaka:</strong> 10 de janeiro de 2027 — Grand Cube Osaka</li>
            </ul>
          </div>
          <p className="text-slate-300 leading-relaxed">
            No palco do Suntory Hall também foi revelado que o pianista <strong>marasy (まらしぃ)</strong>, nome querido da cena Vocaloid, 
            participará dos próximos concertos da turnê.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'snow-miku-2027-design',
    title: 'Snow Miku 2027: Design Vencedor do Concurso é Anunciado',
    summary: 'A Crypton revelou em 30 de junho o vencedor do concurso de trajes para o Nendoroid Snow Miku & Rabbit Yukine 2027: o design cheio de corações da artista Mochi será a Snow Miku do próximo ano.',
    date: 'Junho 2026',
    fullDate: '30 Junho 2026',
    category: 'Cultura',
    featured: false,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
           <div className="flex items-center space-x-3 mb-4">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <NewsIcon className="w-6 h-6 text-white" />
              </div>
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">A Snow Miku do Futuro</h2>
              <p className="text-slate-400">Design vencedor para o festival de 2027</p>
            </div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            Já é hora de pensar no inverno que vem: em 30 de junho foi anunciado o vencedor do concurso de trajes 
            <strong>"2027 Nendoroid Snow Miku &amp; Rabbit Yukine"</strong>. O design escolhido é da artista <strong>Mochi (もち)</strong>.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            A proposta vencedora traz uma Snow Miku fofa e <strong>repleta de corações</strong>, e servirá de base para o visual 
            do festival Snow Miku de 2027 em Sapporo, além da tradicional figura Nendoroid da personagem com sua companheira Rabbit Yukine.
          </p>
          <p className="text-slate-300 leading-relaxed">
            O concurso de trajes é uma tradição do evento: todos os anos, fãs de todo o mundo enviam propostas e a comunidade 
            participa da escolha do tema visual da edição seguinte do festival de inverno de Hokkaido.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'persona-5-phantom-x-miku',
    title: 'Hatsune Miku Chega a Persona 5: The Phantom X em Colaboração',
    summary: 'Anunciada em meados de junho, a colaboração entre Persona 5: The Phantom X e Hatsune Miku traz a cantora virtual como personagem jogável, em meio às comemorações de 1º aniversário do jogo.',
    date: 'Junho 2026',
    fullDate: 'Junho 2026',
    category: 'Cultura',
    featured: false,
    content: (
      <>
        <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Miku Entra no Metaverso de Persona</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            <strong>Persona 5: The Phantom X</strong>, o spin-off mobile da série da Atlus, anunciou em meados de junho uma 
            colaboração com <strong>Hatsune Miku</strong>, incluindo uma animação de abertura especial para o evento.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            A parceria faz parte das comemorações de <strong>1º aniversário do jogo</strong>, que reuniu uma série de eventos 
            comemorativos no fim de junho. Em julho, Miku se tornou <strong>personagem jogável</strong>, com apresentação 
            de batalha própria dentro do game.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Não é a primeira vez que Miku cruza o caminho de grandes franquias de jogos, mas a chegada ao universo de Persona 
            empolgou as duas comunidades — e reforça como a cantora virtual segue presente nos lançamentos mais relevantes dos games.
          </p>
        </div>
      </>
    )
  },
  {
    slug: 'miku-expo-2026-na',
    title: 'MIKU EXPO 2026 América do Norte: Turnê se Encerra com 16 Shows',
    summary: 'A etapa norte-americana da HATSUNE MIKU EXPO 2026 terminou em 19 de maio na Cidade do México, após 16 shows por cidades como Chicago, Los Angeles, Boston e Toronto (Hamilton). A música tema foi "CONNECT:COMMUNE", do FLAVOR FOLEY.',
    date: 'Maio 2026',
    fullDate: '19 Maio 2026',
    category: 'Música',
    featured: false,
    content: (
      <>
         <div className="glass-effect rounded-xl p-6 border border-cyan-500/20 mb-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">Turnê Concluída com Sucesso</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            A <strong>HATSUNE MIKU EXPO 2026</strong> completou sua etapa pela América do Norte: foram <strong>16 shows</strong> 
            entre 12 de abril e 19 de maio, com encerramento na <strong>Cidade do México</strong>.
          </p>
        </div>
        <p className="text-slate-300 leading-relaxed mb-4">
          A turnê passou por Chicago, Denver, Vancouver, Seattle, San Jose, Los Angeles, Glendale, Grand Prairie, Cedar Park, 
          Duluth, Washington DC, Newark, Boston e Hamilton (Canadá), levando o espetáculo de projeção da Miku a milhares de fãs.
        </p>
        <p className="text-slate-300 leading-relaxed">
          A música tema da edição foi <strong>"CONNECT:COMMUNE"</strong>, do grupo <strong>FLAVOR FOLEY</strong>, com vídeo de Louie Zong. 
          O blog oficial da Piapro publicou relatos pós-turnê celebrando a energia do público em cada cidade — e a próxima parada 
          da Miku Expo já está marcada: a Europa, em novembro.
        </p>
      </>
    )
  }
];
