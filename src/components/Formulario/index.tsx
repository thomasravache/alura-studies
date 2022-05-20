import { Component, FormEvent } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { IFormularioState, IFormularioProps } from '../../types/interfaces';

class Formulario extends Component<IFormularioProps, IFormularioState> {
  constructor(props: IFormularioProps) {
    super(props);

    this.state = {
      tarefa: '',
      tempo: '00:00',
    };

    this.adicionarTarefa = this.adicionarTarefa.bind(this);
  }

  adicionarTarefa(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('state', this.state);
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa}>
        <div className={style.inputContainer}>  
          <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input
              type="text"
              name="tarefa"
              value={this.state.tarefa}
              onChange={(e) => this.setState({ ...this.state, tarefa: e.target.value })}
              id="tarefa"
              placeholder="O que você quer estudar?"
              required
            />
        </div>
        <div className={style["inputContainer"]}>
            <label htmlFor="tempo">Tempo</label>
            <input
              type="time"
              step="1"
              name="tempo"
              value={this.state.tempo}
              onChange={(e) => this.setState({ ...this.state, tempo: e.target.value })}
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            />
        </div>
        <Botao>Adicionar</Botao>
      </form>
        );
  }
}

export default Formulario;
