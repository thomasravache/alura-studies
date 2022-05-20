import ITarefa from './Tarefa';

export default interface IListaProps {
  tarefas: ITarefa[];
  selecionaTarefa(tarefaSelecionada: ITarefa): void;
}
