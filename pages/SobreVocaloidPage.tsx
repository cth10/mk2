import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import { ContentCard } from "../components/ContentCard";
import { InfoIcon } from "../constants";

// Ícones SVG tech otaku style
const MagicIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.5 5.6L5 7L6.4 4.5L5 2L7.5 3.4L10 2L8.6 4.5L10 7L7.5 5.6ZM19.5 15.4L22 14L20.6 16.5L22 19L19.5 17.6L17 19L18.4 16.5L17 14L19.5 15.4ZM22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2ZM13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78ZM14.37 7.29L16.71 9.63C17.1 10.02 17.1 10.65 16.71 11.04L11.04 16.71C10.65 17.1 10.02 17.1 9.63 16.71L7.29 14.37C6.9 13.98 6.9 13.35 7.29 12.96L12.96 7.29C13.35 6.9 13.98 6.9 14.37 7.29Z" />
  </svg>
);

const HistoryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.34 8L3.27 9.07L6 11.8L8.73 9.07L7.66 8L6.81 8.85C7 6.5 9.67 4.64 12.8 5.11C15.99 5.59 18.41 8.58 18.41 12C18.41 15.24 15.76 17.9 12.5 17.9H12C10.07 17.9 8.5 16.33 8.5 14.4V14H7V14.4C7 17.16 9.24 19.4 12 19.4H12.5C16.59 19.4 19.91 16.08 19.91 12C19.91 7.5 16.24 3.83 11.74 4.07C11.49 3.1 12.18 3.04 13 3ZM12 7V12.25L16 14.33L15.28 15.54L10.5 13V7H12Z" />
  </svg>
);

export const SobreVocaloidPage: React.FC = () => {
  return (
    <PageWrapper
      title="Desvendando a Tecnologia Vocaloid"
      titleIcon={<InfoIcon />}
    >
      <ContentCard title="O Que é Vocaloid?">
        <p>
          Vocaloid (ボーカロイド) é um software de síntese de voz de vanguarda,
          originado e comercializado pela Yamaha Corporation. Ele capacita os
          usuários a sintetizar performances vocais realistas simplesmente
          inserindo letras e uma melodia. Em sua essência, Vocaloid funciona
          como um "instrumento musical" que canta, abrindo um leque de
          possibilidades criativas.
        </p>
        <p className="mt-3">
          A tecnologia subjacente ao Vocaloid baseia-se na fragmentação de
          gravações vocais humanas em unidades fonéticas minúsculas. Estas
          unidades podem ser subsequentemente recombinadas e finamente ajustadas
          (em tom, timbre, duração, etc.) para construir novas frases e canções
          com expressividade notável.
        </p>
        <img
          src="/miku-a.png"
          alt="Hatsune Miku - Arte oficial representando o Vocaloid"
          className="rounded-xl shadow-xl w-full my-6 object-contain aspect-square max-h-[400px] transition-transform duration-300 hover:scale-105"
        />
      </ContentCard>

      <ContentCard title={<><MagicIcon className="inline w-6 h-6 mr-2 text-purple-400" />Como Funciona a Magia?</>}>
        <p>
          O processo de criação de uma canção com Vocaloid tipicamente envolve
          as seguintes etapas:
        </p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>
            <strong>Composição e Letra:</strong> O usuário primeiramente compõe
            a melodia e escreve a letra da música. Isso pode ser feito em um
            software de Digital Audio Workstation (DAW) ou diretamente no editor
            Vocaloid.
          </li>
          <li>
            <strong>Entrada de Dados no Editor:</strong> A melodia é inserida no
            editor Vocaloid como uma partitura musical ou através de uma
            interface "piano roll". A letra é digitada foneticamente para cada
            nota correspondente.
          </li>
          <li>
            <strong>Seleção do Voicebank:</strong> O usuário escolhe um
            "voicebank" (banco de voz), como o de Hatsune Miku, que contém as
            amostras vocais e características tímbricas do cantor virtual
            desejado.
          </li>
          <li>
            <strong>Ajustes e Expressividade:</strong> Diversos parâmetros
            vocais, como vibrato, dinâmica (volume), tom, clareza da pronúncia,
            e transições entre notas, podem ser meticulosamente ajustados para
            tornar o canto mais natural, emotivo e expressivo.
          </li>
          <li>
            <strong>Renderização e Mixagem:</strong> A faixa vocal gerada é
            então exportada como um arquivo de áudio. Esta faixa pode ser
            posteriormente importada em um DAW para mixagem com instrumentos,
            efeitos e outros elementos, finalizando a produção musical.
          </li>
        </ol>
      </ContentCard>

      <ContentCard title={<><HistoryIcon className="inline w-6 h-6 mr-2 text-cyan-400" />Breve História e Evolução Contínua</>}>
        <p>
          O conceito fundamental do Vocaloid começou a ser pesquisado na
          Universidade Pompeu Fabra, em Barcelona, Espanha, no início dos anos
          2000, como parte de um projeto de pesquisa. A Yamaha Corporation
          posteriormente desenvolveu e comercializou a tecnologia, lançando a
          primeira versão do software Vocaloid em 2004.
        </p>
        <p className="mt-3">
          Desde então, Vocaloid passou por múltiplas iterações significativas
          (Vocaloid 2, Vocaloid 3, Vocaloid 4, Vocaloid 5, e mais recentemente
          Vocaloid 6), cada uma trazendo melhorias substanciais na qualidade da
          síntese, maior realismo, mais opções de edição expressiva e novos
          voicebanks com características únicas.
        </p>
        <p className="mt-3">
          Enquanto os primeiros Vocaloids eram predominantemente focados nos
          mercados de língua inglesa e japonesa, a tecnologia expandiu-se para
          suportar uma gama crescente de idiomas, incluindo espanhol, coreano e
          chinês, ampliando seu alcance e impacto global. O lançamento de
          Hatsune Miku, com a engine Vocaloid 2, foi um ponto de inflexão
          crucial, popularizando massivamente a tecnologia e transformando-a em
          um fenômeno cultural.
        </p>
      </ContentCard>
    </PageWrapper>
  );
};
