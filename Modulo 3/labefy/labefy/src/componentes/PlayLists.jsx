import React from "react";
import axios from 'axios';
import styled from "styled-components";

const Container = styled.div`
border:1px solid;
justify-content:space-between;
`

export class PlayLists extends React.Component {
  //guarda usuarios para mostrar
  state = {
    AllLists: []
  }
  //monta funcao
  componentDidMount() {
    this.getAllLists()
  }


  getAllLists = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

    try{
      const res = await axios.get(url,{
        headers:{
              Authorization: "athos-de-oliveira-joy"
            }
      })
      this.setState({ AllLists: res.data.result.list })
    } catch (err) {
      console.log("ERROR-get = "+ err.data.result.list)
    }
  }


  deleteList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
        headers: {
          Authorization: "athos-de-oliveira-joy"
        }
    })
        .then((res) => {
            alert("Lista deletada com sucesso!")
            this.getAllLists()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente tente Mais tarde")
        })
}

  render() {
    const listUpdate = this.state.AllLists.map((list) => {
      return (
      <Container key={list.id}>
      {list.name}
      <button onClick={() => this.props.AdicionaMisica }>Adicionar Musica</button> 
     <button onClick={() => this.deleteList(list.id)}>X</button>
      </Container>
    )})


    return (
      <div>
        <button onClick={this.props.goLIstaDetalhada}>Ir para Musicas</button>
        <h1>Tela Lista</h1>
        {/* mostra lista do map */}
        <p>{listUpdate}</p>
   
      </div>
    );
  }
}