
import React from 'react';
import styled from 'styled-components';
import { DadosGerais } from './components/etapa1';
import { InfoSuperior } from './components/etapa2';
import { InfoNaoSuperior } from './components/etapa3';
import { Agradecimento } from './components/final';

const Conteiner = styled.div`
  text-align: center;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />
      case 2:
        return <InfoSuperior />
      case 3:
        return <InfoNaoSuperior />
      case 4:
        return <Agradecimento />
    }
  }

  irParaProximaEtapa =()=>{
    if(this.state.etapa < 4){
    this.setState({etapa: this.state.etapa + 1})
  }
}

botaoProximaEtapa=()=>{
  while(this.state.etapa < 4){
    return  <button onClick={this.irParaProximaEtapa} >Próxima etapa</button>
  }
}


  render() {
    return (
      <Conteiner>
        {this.renderizaEtapa()}
        {this.botaoProximaEtapa()}
      </Conteiner>
    );
  }
}
export default App;
