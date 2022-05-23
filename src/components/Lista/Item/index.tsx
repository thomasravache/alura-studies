import { IItemProps } from '../../../types/interfaces';
import style from './Item.module.scss';

function Item({ tarefa, tempo, selecionado, completado, id , selecionaTarefa }: IItemProps) {
  return(
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado: ''}`}
      onClick={(_e) => selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id,
        }
      )}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
