import React from "react";
import { Cadastro } from "./componentes/cadastro";
import { PlayLists } from "./componentes/play-list";
import styled from "styled-components";

const Body  = styled.div`
display:flex;

    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;

`

export default class App extends React.Component  {
 state = {
   home:"cadastro"
 }
 
selectPages =() =>{
switch (this.state.home){
case "cadastro":
  return <Cadastro goListas={this.goListas} />
  case "lista":
    return <PlayLists   goCadastro={this.goCadastro}/>  
    default:
      return <div>Erro 404 - pagina nao Encontrada</div>
}

}
goLIstaDetalhada = () =>{
  this.setState({home:"listaDetalhada"})
}

  goCadastro =()=>{
    this.setState({home:"cadastro"})
  }

goListas =() =>{
this.setState({home: "lista"})
}

  render(){
  return (
    <Body>
      {this.selectPages()} 
      </Body>
  );
}
}

