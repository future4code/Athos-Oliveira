import React from "react";
import { Cadastro } from "./componentes/Cadastro";
import { PlayLists } from "./componentes/PlayLists";
import { ListaDetalhada } from "./componentes/ListaDetalhada";
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
    return <PlayLists  goLIstaDetalhada={this.goLIstaDetalhada}/> 
    case "listaDetalhada":
      return <ListaDetalhada  goCadastro={this.goCadastro}/>    
    default:
      return <div>Erro 404 - pagina nao achada</div>

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

