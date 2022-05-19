import React from 'react';

class Botao extends React.Component {
  render() {
    const backgroundColor = 'blue'
    return(
      <button style={{
        backgroundColor,
      }}>
        Botão
      </button>
    );
  }
}

export default Botao;
