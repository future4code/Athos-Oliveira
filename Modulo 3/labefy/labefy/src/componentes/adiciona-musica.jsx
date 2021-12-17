import React from "react";
import axios from "axios";
//import styled from "styled-components";


export class AdicionaMusica extends React.Component {
  state = {
    nameMusic: "",
    nameArtist:"",
    urlMusic:"" ,
    lista:[]   
  }
  handleNameMusic = (e) => {
    this.setState({ nameMusic:e.target.value})
  }
  handleArtist = (e) => {
    this.setState({ nameArtist:e.target.value})
  }
  handleURL = (e) => {
    this.setState({ urlMusic:e.target.value})
  }
  adicionarTrack = (idPlaylist) => {
    idPlaylist === this.state.exibir
      ? this.setState({ exibir: true }) && this.setState({ exibirSalvar: true })
      : this.setState({ exibir: idPlaylist });
  };

  addMusic = async  (idPlaylist) => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/`

    const  body = {
        name: this.state.nameMusic,
        artist: this.state.nameArtist,
        url:this.state.urlMusic
    } 

    try {
      const res = await axios.post(url,body, {
        headers:{
              Authorization: "athos-de-oliveira-joy"
            }
      })
       this.setState({ lista: res.data.result.list })
    } catch (err) {
      console.log("ERROR-get = "+ err.data.result.list)
    }
    this.setState({nameMusic: "", nameArtist: "", urlMusic: ""})
  }


  render() {
    return (
     
        <div>
        
        <h1> Adicionar Musicas</h1>
        <form>
        <input placeholder="Nome da Musica" value={this.state.nameMusic} onChange={this.handleNameMusic}/>
        <input placeholder="Nome do Artista" value={this.state.nameArtist} onChange={this.handleArtist}/>
        <input placeholder="Url da Musica" value={this.state.urlMusic} onChange={this.handleURL}/>
        <button onClick={this.addMusic}>Adicionar</button>
        </form>
      </div>
    );
  }
}