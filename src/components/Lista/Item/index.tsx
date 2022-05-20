import { IItemProps } from '../../../types/interfaces';
import style from './Item.module.scss';

function Item({ tarefa, tempo, selecionado, completado, id , selecionaTarefa }: IItemProps) {
  console.log('item atual', { tarefa, tempo, selecionado, completado, id });
  return(
    <li
      className={style.item}
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
