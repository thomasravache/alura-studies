import { IListaProps } from '../../types/interfaces';
import style from './Lista.module.scss';
import Item from './Item';

function Lista({ tarefas, selecionaTarefa }: IListaProps) {
  return(
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item /* utilizar "item" para spread operator */) => (
          <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa} />
          /*
            ou utilizar o spread operator para espalhar as propriedades dentro das props, tomar cuidado
            e atentar com as propriedades, todas tem que estar contidas dentro do componente pra funcionar
            <Item {...item} />
          */
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
