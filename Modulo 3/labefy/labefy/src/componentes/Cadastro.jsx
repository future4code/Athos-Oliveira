import React from "react";
import axios from "axios";
//import styled from "styled-components";


export class Cadastro extends React.Component {
  state = {
    name: ""
    
  }
  handleName = (e) => {
    this.setState({ name:e.target.value})
  }


  CreatePlayList = () => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`
    const  body = {
        name: this.state.name 

    } 
    axios.post(url,body, {
      headers:{
        Authorization: "athos-de-oliveira-joy"
      }
    })
    .then((res) =>{
      console.log("ok cadastro ok")
    this.setState({name:""})
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  render() {
    return (
      // <div>  props.irParaLista é o name que recebe a funcao da outra pagina app
        <div>
        <button onClick={this.props.goListas}>Ir para Lista </button> 
        <h1>Tela Cadasro</h1>
        <form>
        <input placeholder="Nome da PlayList" value={this.state.name} onChange={this.handleName}/>
        <button onClick={this.CreatePlayList}>cadastrar</button>
        </form>
      </div>
    );
  }
}