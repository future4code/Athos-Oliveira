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


// const ContainerPrincipal = styled.div`
// color:white;
// text-align:center;
// background-image:url("https://content.altexsoft.com/media/2019/04/ai-solutions-bg.jpg");
// display: flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// margin:0;
// padding: 0;
// `




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
    <Body>
     

      {this.selectPages()} 
  

    </Body>
  );
}
}

