import React from "react";
import axios from 'axios';
import styled from "styled-components";

const Container = styled.div`
border:1px solid;
margin:5px;
justify-content:space-between;
`

export class ListaDetalhada extends React.Component {
  //guarda usuarios para mostrar
  state = {
    AllMusics: []
  }
  //monta funcao
  componentDidMount() {
    this.getAllMusics()
  }


  getAllMusics = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`

try{
  const res = await axios.get(url,{
    headers:{
          Authorization: "athos-de-oliveira-joy"
        }
  })
  this.setState({ AllMusics: res.data.result.tracks })

} catch (err) {
  console.log("ERROR no GET das Musicas ")
}
}

 deleteMusic = (id,name) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${name}`
    axios.delete(url, {
        headers: {
          Authorization: "athos-de-oliveira-joy"
        }
    })
        .then((res) => {
            alert("Musica deletada com sucesso!")
            this.getAllLists()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente Mais tarde")
        })
}
 
  render() {
    const musicUpdate = this.state.AllMusics.map((music) => {
      return (
      <Container key={music.id}>
      {music.artist}
      {music.name}
 
     <button onClick={() => this.deleteMusic(music.id)}>X</button>
      </Container>
    )})


    return (
      <div>
        {/* <button onClick={this.props.goCadastro}>Ir para Cadastro</button> */}
        <h1>Lista de Musicas (Play List)</h1>
   
        {/* <div>{this.state.AllMusics.lenght && musicUpdate}</div> */}
        {this.state.AllMusics.length ? musicUpdate : <p></p>}
        {/* {this.musicUpdate} */}
      </div>
    );
  }
}