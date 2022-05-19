import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{ children: React.ReactNode }> {
  render() {
    const { children } = this.props;
    return(
      <button className={style.botao}>
        {children}
      </button>
    );
  }
}

export default Botao;
