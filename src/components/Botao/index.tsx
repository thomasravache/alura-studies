import React from 'react';

class Botao extends React.Component {
  render() {
    const isActive = true;
    const styles = {
      backgroundColor: isActive ? 'green' : 'red',
    }
    return(
      <button style={styles}>
        Botão
      </button>
    );
  }
}

export default Botao;
