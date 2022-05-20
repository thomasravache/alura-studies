import { Dispatch, SetStateAction } from 'react';
import ITarefa from './Tarefa';

export default interface IFormularioState {
  tarefa: string;
  tempo: string;
}

interface IFormularioProps {
  setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}

export type {
  IFormularioProps,
}
