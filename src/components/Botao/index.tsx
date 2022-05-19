import React from 'react';

class Botao extends React.Component {
  render() {
    const styles = {
      backgroundColor: 'blue'
    }
    return(
      <button style={styles}>
        Botão
      </button>
    );
  }
}

export default Botao;
