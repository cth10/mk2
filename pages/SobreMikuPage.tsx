
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { MikuOutlineIcon } from '../constants';

export const SobreMikuPage: React.FC = () => {
  return (
    <PageWrapper title="Sobre Hatsune Miku" titleIcon={<MikuOutlineIcon />}>
      <ContentCard title="Perfil da Diva Virtual">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <img 
            src="/miku2.webp" 
            alt="Arte oficial de Hatsune Miku (V4X Design)" 
            className="rounded-xl shadow-2xl w-full lg:w-2/5 max-w-md mx-auto object-contain transition-transform duration-300 hover:scale-105"
          />
          <div className="lg:w-3/5">
            <p className="text-lg mb-6">
              Hatsune Miku (初音ミク), cujo nome poeticamente significa "O Primeiro Som do Futuro", é uma personagem humanoide e a carismática persona de um software sintetizador de voz de ponta, desenvolvido pela Crypton Future Media.
            </p>
            <h3 className="text-xl font-semibold text-teal-400 mt-6 mb-3">Detalhes Oficiais da Personagem:</h3>
            <ul className="list-none space-y-3 mb-4 p-0">
              {[
                { label: "Idade", value: "16 anos" },
                { label: "Altura", value: "158 cm (5'2\")" },
                { label: "Peso", value: "42 kg (92.6 lbs)" },
                { label: "Item Chave", value: "Cebolinha (Negi)" },
                { label: "Gêneros", value: "Pop, Rock, Dance, Eletrônica, e mais!" }
              ].map(item => (
                <li key={item.label} className="flex items-center border-b border-slate-700/50 py-3 last:border-b-0">
                  <strong className="w-1/3 sm:w-1/4 text-pink-400 font-medium">{item.label}:</strong> 
                  <span className="text-slate-200">{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Miku é universalmente reconhecida por suas longas maria-chiquinhas azul-turquesa e sua voz distinta e energética, que já estrelou incontáveis músicas, concertos holográficos espetaculares e colaborações de renome.
            </p>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Gênese e Evolução">
        <p>
          Hatsune Miku foi lançada ao mundo em 31 de agosto de 2007, impulsionada pela inovadora tecnologia Vocaloid 2 da Yamaha. Sua voz cristalina foi meticulosamente criada a partir de amostras da talentosa dubladora japonesa Saki Fujita. 
          Desde seu advento, Miku transcendeu sua origem como software para se tornar um fenômeno cultural global, com milhões de músicas e vídeos criados por uma comunidade apaixonada de fãs em todo o planeta.
        </p>
        <p className="mt-3">
          A Crypton Future Media visionou Miku não apenas como uma ferramenta, mas como uma personagem com a qual os usuários pudessem se conectar e cocriar. Esta abordagem catalisou uma explosão de criatividade sem precedentes, solidificando seu status como uma "idol virtual" colaborativa e em constante evolução.
        </p>
      </ContentCard>

      <ContentCard title="Design Icônico e Estética">
        <p>
          O design inconfundível de Hatsune Miku foi concebido pelo ilustrador KEI. Suas características marcantes incluem:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Cabelo exuberante e comprido, em tom azul-turquesa (ou ciano), elegantemente preso em maria-chiquinhas duplas.</li>
          <li>Traje futurista que remete a um uniforme escolar estilizado, com uma paleta de cores harmonizando preto, cinza e detalhes em azul-turquesa vibrante.</li>
          <li>O número "01" proeminentemente tatuado em seu ombro esquerdo, simbolizando seu status pioneiro como a primeira da "Character Vocal Series" da Crypton.</li>
          <li>Fones de ouvido high-tech e acessórios de cabelo que complementam seu visual tecnológico e arrojado.</li>
        </ul>
        <p className="mt-3">
          Seu design é instantaneamente reconhecível e se consagrou como um símbolo emblemático da cultura pop contemporânea e da criatividade digital.
        </p>
      </ContentCard>
    </PageWrapper>
  );
};