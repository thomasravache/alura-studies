import { useState, useEffect } from 'react';
import { ITarefa } from '../types/interfaces';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  // useEffect(() => {
  //   setTarefas([
  //     {
  //       tarefa: 'React',
  //       tempo: '02:00:00',
  //     },
  //     {
  //       tarefa: 'Javascript',
  //       tempo: '01:00:00',
  //     },
  //     {
  //       tarefa: 'Sass',
  //       tempo: '02:00:00',
  //     }
  //   ]);
  // }, []);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
