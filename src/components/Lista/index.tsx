import React, { useEffect, useState } from 'react';
import { ITarefa } from '../../types/interfaces';
import style from './Lista.module.scss';
import Item from './Item';

function Lista() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  useEffect(() => {
    setTarefas([
      {
        tarefa: 'React',
        tempo: '02:00:00',
      },
      {
        tarefa: 'Javascript',
        tempo: '01:00:00',
      },
      {
        tarefa: 'Sass',
        tempo: '02:00:00',
      }
    ]);
  }, []);

  return(
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        setTarefas([...tarefas, { tarefa: 'Estudar estado', tempo: '05:00:00' }]);
      }}>Estudos do dia</h2>
      <ul>
        {tarefas.map(({ tarefa, tempo } /* utilizar "item" para spread operator */, index) => (
          <Item key={index} tarefa={tarefa} tempo={tempo} />
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
