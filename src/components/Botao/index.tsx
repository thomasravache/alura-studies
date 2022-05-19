import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ texto: string }> {
  render() {
    const { texto } = this.props;
    return(
      <button className={style.botao}>
        {texto}
      </button>
    );
  }
}

export default Botao;
