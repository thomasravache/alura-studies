import Botao from '../Botao';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import { ICronometroProps } from '../../types/interfaces';
import { useState } from 'react';

function Cronometro({ selecionado }: ICronometroProps) {
  console.log('conversão: ', tempoParaSegundos('01:01:01'));
  const [tempo, setTempo] = useState<number>();

  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}

export default Cronometro;
