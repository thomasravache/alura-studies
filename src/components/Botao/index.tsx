import React from 'react';
import style from './Botao.module.scss';

type buttonType = "submit" | "button";

interface IBotaoProps {
  children: React.ReactNode;
  type?: buttonType;
  onClick?(): void;
}

function Botao({ children, type = 'button', onClick }: IBotaoProps) {
  return(
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

// class Botao extends React.Component<IBotaoProps> {
//   render() {
//     const { children, type = "button", onClick } = this.props;
//     return(
//       <button className={style.botao} type={type} onClick={onClick}>
//         {children}
//       </button>
//     );
//   }
// }

export default Botao;
