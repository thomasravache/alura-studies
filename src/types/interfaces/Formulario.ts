import { Dispatch, SetStateAction } from 'react';
import ITarefa from './Tarefa';

export default interface IFormularioState extends ITarefa {}

interface IFormularioProps {
  setTarefas: Dispatch<SetStateAction<ITarefa[]>>
}

export type {
  IFormularioProps,
}
