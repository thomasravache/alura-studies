import style from './Item.module.scss';
import { ITarefa } from '../../../types/interfaces';

function Item({ tarefa, tempo }: ITarefa) {
  return(
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
