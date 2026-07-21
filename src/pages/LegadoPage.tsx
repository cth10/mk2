
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { SparklesIcon } from '../components/Icons';

// Ícones SVG hardcore otaku style
const MusicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 7H10V5H18V7ZM18 11H10V9H18V11ZM18 15H10V13H18V15ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z" />
  </svg>
);

const TechIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 7H4C2.9 7 2 7.9 2 9V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V9C22 7.9 21.1 7 20 7ZM20 18H4V9H20V18ZM7 4H6V6H7V4ZM7 1H6V3H7V1ZM10 1H9V3H10V1ZM10 4H9V6H10V4ZM13 1H12V3H13V1ZM13 4H12V6H13V4Z" />
  </svg>
);

export const LegadoPage: React.FC = () => {
  return (
    <PageWrapper title="O Legado Imortal de Hatsune Miku" description="O impacto cultural de Hatsune Miku: concertos holográficos, músicas emblemáticas, colaborações globais e o futuro da síntese vocal." titleIcon={<SparklesIcon />}>
      <ContentCard title="Impacto Cultural Global e Multifacetado">
        <p>
          O impacto de Hatsune Miku na cultura pop transcende em muito o de um simples software. Ela se solidificou como um fenômeno global, exercendo influência significativa e duradoura sobre música, arte digital, moda, tecnologia e a própria natureza da criação de conteúdo online.
        </p>
        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>
            <strong>Democratização da Música:</strong> Miku e a tecnologia Vocaloid democratizaram a produção musical, permitindo que qualquer pessoa com o software e criatividade pudesse compor músicas e compartilhá-las com o mundo. Isso fomentou um ecossistema vibrante de produtores independentes (carinhosamente conhecidos como "Vocaloid Ps") e resultou em milhões de músicas originais.
          </li>
          <li>
            <strong>Concertos Holográficos Inovadores:</strong> Miku realiza concertos "ao vivo" como um holograma 3D de alta tecnologia, performando para milhares de fãs em arenas lotadas ao redor do globo. Esses espetáculos são uma vitrine de inovação tecnológica e interação única com o público.
          </li>
          <li>
            <strong>Ícone da Cultura da Web:</strong> Ela é uma figura central e catalisadora em inúmeras comunidades online, inspirando uma quantidade massiva de fanarts, animações, videoclipes, cosplays, memes e discussões.
          </li>
          <li>
            <strong>Colaborações de Alto Nível e Publicidade:</strong> Miku já colaborou com artistas de renome internacional como Pharrell Williams e a banda BUMP OF CHICKEN, além de estrelar campanhas publicitárias para marcas globais como Google, Toyota e SEGA.
          </li>
          <li>
            <strong>Fonte de Educação e Inspiração:</strong> A existência e o sucesso de Miku inspiraram inúmeras pessoas a aprenderem sobre produção musical, composição, animação 2D/3D, ilustração digital e programação.
          </li>
        </ul>
         <img
            src="/hatsune-miku-expo.png"
            alt="Hatsune Miku se apresentando em show holográfico no Miku Expo"
            width={1512}
            height={944}
            loading="lazy"
            decoding="async"
            className="rounded-xl shadow-xl w-full my-6 object-cover aspect-video max-h-[350px] transition-transform duration-300 hover:scale-105"
          />
      </ContentCard>

      <ContentCard title={<><MusicIcon className="inline w-6 h-6 mr-2 text-cyan-400" />Músicas Notáveis e Emblemáticas (Apenas Exemplos)</>}>
        <p>
          Com um catálogo estimado em milhões de músicas, é uma tarefa hercúlea listar todas as canções significativas. No entanto, algumas se destacaram imensamente, tornando-se verdadeiros hinos da comunidade Vocaloid e da cultura da internet. Estas são apenas algumas sugestões para iniciar sua exploração (sem links diretos para áudio/vídeo, conforme solicitado):
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>World is Mine (ryo - supercell):</strong> Um clássico absoluto que define a atitude carismática e um tanto "princesa" de Miku.</li>
          <li><strong>Melt (ryo - supercell):</strong> Uma balada emocional e tocante sobre as doçuras e incertezas do amor jovem.</li>
          <li><strong>Tell Your World (kz - livetune):</strong> Usada em uma memorável campanha do Google Chrome, simbolizando a conexão global através da Miku e da música.</li>
          <li><strong>Senbonzakura (Kurousa-P):</strong> Uma música com uma cativante melodia de tema tradicional japonês e um ritmo contagiante e energético.</li>
          <li><strong>PoPiPo (Lamaze-P):</strong> Uma canção absurdamente energética, peculiar e memorável sobre suco de vegetais.</li>
          <li><strong>Rolling Girl (wowaka):</strong> Uma música de rock intensa, com uma carga emocional profunda e letras introspectivas.</li>
          <li><strong>Love is War (ryo - supercell):</strong> Uma poderosa canção de rock sobre os conflitos e a paixão do amor.</li>
          <li><strong>Ghost Rule (DECO*27):</strong> Uma música eletrônica popular com letras complexas e um ritmo viciante.</li>
        </ul>
        <p className="mt-4 italic text-sm text-teal-300/80">
          A verdadeira beleza do universo Miku reside na constante descoberta de novas músicas, estilos e artistas talentosos. Plataformas como YouTube, Niconico, Spotify e Apple Music são excelentes pontos de partida para explorar este vasto e criativo mundo musical.
        </p>
      </ContentCard>

      <ContentCard title={<><TechIcon className="inline w-6 h-6 mr-2 text-purple-400" />O Futuro Promissor de Miku e da Síntese Vocal</>}>
        <p>
          Hatsune Miku continua a evoluir e a se adaptar. Com o lançamento de novas versões do software Vocaloid e o desenvolvimento de ferramentas complementares como o Piapro Studio (seu editor de voz dedicado), sua voz e capacidades expressivas se expandem continuamente.
        </p>
        <p className="mt-3">
          Além disso, a Crypton Future Media está ativamente explorando novas fronteiras tecnológicas, como a integração de inteligência artificial para interações mais dinâmicas e personalizadas, e aplicações em realidade virtual (VR) e aumentada (AR) para experiências ainda mais imersivas. O legado de Miku não é apenas sobre seu impressionante passado, mas sobre um futuro vibrante e inovador na vanguarda da música, entretenimento digital e tecnologia criativa.
        </p>
      </ContentCard>
    </PageWrapper>
  );
};