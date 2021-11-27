import React from 'react';

export class DadosGerais extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA:1 - Dados Gerais</h1>
        <h3>Qual seu Nome?</h3>
        <input />
        <h3>Qual sua idade?</h3>
        <input />
        <h3>Qual seu E-mail?</h3>
        <input />
        <h3>Qual sua Escolaridade?</h3>


        <select >
        <option value="Ensino Medio">Ensino Medio</option>
        <option value="Bacharel" selected>Bacharel</option>
        <option value="Pos Graduado">Pos Graduado</option>
      </select>
      </div >
    );
  }
}