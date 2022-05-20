import IListaProps from './Lista';
import ITarefa from './Tarefa';

export default interface IItemProps extends Omit<IListaProps, 'tarefas'>, ITarefa {}
