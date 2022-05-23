import ITarefa from './Tarefa';

export default interface ICronometroProps {
  selecionado: ITarefa | undefined;
  finalizarTarefa(): void;
}
