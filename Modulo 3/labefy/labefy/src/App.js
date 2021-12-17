import React from "react";
import { Cadastro } from "./componentes/cadastro";
import { PlayLists } from "./componentes/play-list";
//import { ListaDetalhada } from "./componentes/lista-detalhada";
//import axios from 'axios' ;
//import styled from "styled-components";

export default class App extends React.Component  {
 state = {
   home:"cadastro"
 }
 
//inverteu tela com função
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
    <div>
      {this.selectPages()} 
  

    </div>
  );
}
}

