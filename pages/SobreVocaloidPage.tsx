
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { ContentCard } from '../components/ContentCard';
import { InfoIcon } from '../constants';

export const SobreVocaloidPage: React.FC = () => {
  return (
    <PageWrapper title="Desvendando a Tecnologia Vocaloid" titleIcon={<InfoIcon />}>
      <ContentCard title="O Que é Vocaloid?">
        <p>
          Vocaloid (ボーカロイド) é um software de síntese de voz de vanguarda, originado e comercializado pela Yamaha Corporation. Ele capacita os usuários a sintetizar performances vocais realistas simplesmente inserindo letras e uma melodia. 
          Em sua essência, Vocaloid funciona como um "instrumento musical" que canta, abrindo um leque de possibilidades criativas.
        </p>
        <p className="mt-3">
          A tecnologia subjacente ao Vocaloid baseia-se na fragmentação de gravações vocais humanas em unidades fonéticas minúsculas. Estas unidades podem ser subsequentemente recombinadas e finamente ajustadas (em tom, timbre, duração, etc.) para construir novas frases e canções com expressividade notável.
        </p>
        <img 
            src="https://upload.wikimedia.org/wikipedia/en/6/6f/Hatsune_Miku_V3_artwork.png" 
            alt="Arte oficial de Hatsune Miku (V3 Design) representando o Vocaloid" 
            className="rounded-xl shadow-xl w-full my-6 object-cover aspect-video max-h-[300px] transition-transform duration-300 hover:scale-105"
          />
      </ContentCard>

      <ContentCard title="Como Funciona a Magia?">
        <p>
          O processo de criação de uma canção com Vocaloid tipicamente envolve as seguintes etapas:
        </p>
        <ol className="list-decimal list-inside space-y-3 mt-4">
          <li>
            <strong>Composição e Letra:</strong> O usuário primeiramente compõe a melodia e escreve a letra da música. Isso pode ser feito em um software de Digital Audio Workstation (DAW) ou diretamente no editor Vocaloid.
          </li>
          <li>
            <strong>Entrada de Dados no Editor:</strong> A melodia é inserida no editor Vocaloid como uma partitura musical ou através de uma interface "piano roll". A letra é digitada foneticamente para cada nota correspondente.
          </li>
          <li>
            <strong>Seleção do Voicebank:</strong> O usuário escolhe um "voicebank" (banco de voz), como o de Hatsune Miku, que contém as amostras vocais e características tímbricas do cantor virtual desejado.
          </li>
          <li>
            <strong>Ajustes e Expressividade:</strong> Diversos parâmetros vocais, como vibrato, dinâmica (volume), tom, clareza da pronúncia, e transições entre notas, podem ser meticulosamente ajustados para tornar o canto mais natural, emotivo e expressivo.
          </li>
          <li>
            <strong>Renderização e Mixagem:</strong> A faixa vocal gerada é então exportada como um arquivo de áudio. Esta faixa pode ser posteriormente importada em um DAW para mixagem com instrumentos, efeitos e outros elementos, finalizando a produção musical.
          </li>
        </ol>
      </ContentCard>

      <ContentCard title="Breve História e Evolução Contínua">
        <p>
          O conceito fundamental do Vocaloid começou a ser pesquisado na Universidade Pompeu Fabra, em Barcelona, Espanha, no início dos anos 2000, como parte de um projeto de pesquisa. A Yamaha Corporation posteriormente desenvolveu e comercializou a tecnologia, lançando a primeira versão do software Vocaloid em 2004.
        </p>
        <p className="mt-3">
          Desde então, Vocaloid passou por múltiplas iterações significativas (Vocaloid 2, Vocaloid 3, Vocaloid 4, Vocaloid 5, e mais recentemente Vocaloid 6), cada uma trazendo melhorias substanciais na qualidade da síntese, maior realismo, mais opções de edição expressiva e novos voicebanks com características únicas.
        </p>
        <p className="mt-3">
          Enquanto os primeiros Vocaloids eram predominantemente focados nos mercados de língua inglesa e japonesa, a tecnologia expandiu-se para suportar uma gama crescente de idiomas, incluindo espanhol, coreano e chinês, ampliando seu alcance e impacto global. O lançamento de Hatsune Miku, com a engine Vocaloid 2, foi um ponto de inflexão crucial, popularizando massivamente a tecnologia e transformando-a em um fenômeno cultural.
        </p>
      </ContentCard>
    </PageWrapper>
  );
};