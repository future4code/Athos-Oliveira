import React from "react";
// import { AdicionaMusica } from "./adiciona-musica";
// import { ListaDetalhada } from "./lista-detalhada";
import axios from 'axios';
import styled from "styled-components";

const NomeMusica = styled.p`
  font-size: 16px;
  display: inline-block;
  padding-right: 12px;
`;



const BotaoDeletar = styled.button`
  background-color: #f44336; /* Green */
  border: none;
  border-radius: 4px;
  color: black;
  padding: 8px;
  margin: 0 8px;
  &:hover {
    background: #f44500;
    cursor: pointer;
  }
`;

const BotaoAdicionar = styled.button`
  background-color: #818181;
  border: none;
  border-radius: 4px;
  color: #cccccc;
  padding: 8px;
  margin-left: 12px;
  &:hover {
    background: #323533;
    cursor: pointer;
  }
`;

const CardPlaylist = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  border: 1px solid black;
  border-radius: 30px;
  padding: 10px;
  margin: 8px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:active {
    background-color: black;
  }
`;

const ContainerInputs = styled.div`
  display: block;
`;

const Inputs = styled.input`
  border: none;
  border-radius: 50px;
  padding: 8px;
  margin: 8px 0;
  width: 80%;
`;

const Tracks = styled.audio`
  display: flex;
  height: 36px;
  margin-bottom: 8px;
  border-radius: 8px;
  width: 450px;
`;

export class PlayLists extends React.Component {
  //guarda usuarios para mostrar
  state = {
    AllLists:[],  
    nameMusic: "",
    nameArtist:"",
    urlMusic:"" ,
    AllTracks:[]  
    //selectComponent: undefined,
   
  }
  //monta funcao
  componentDidMount() {
    this.getAllLists()
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

  getAllLists = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

    try {
      const res = await axios.get(url, {
        headers: { Authorization: "athos-de-oliveira-joy" }
      })
      this.setState({ AllLists: res.data.result.list })
    } catch (err) {
      console.log("ERROR-get = " + err.data.result.list)
    }
  }
  addMusic = async (idPLaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPLaylist}/tracks`;
    const body = {
      name: this.state.nameMusic,
      artist: this.state.nameArtist,
      url: this.state.urlMusic,
    };
    try {
      const res = await axios.post(url, body, {
        headers: { Authorization: "athos-de-oliveira-joy" },
      });
      this.setState({ nameMusic: "", nameArtist: "", urlMusic: "" });
      alert(`Adicionado na Playlist`)
      console.log(res, this.state)
      this.adicionarTrack();
    } catch (err) {
      alert(err.message);
    }
  };

  exibirTracks = async (idPlaylist) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`;
    try {
      const res = await axios.get(url, {
        headers: { Authorization: "athos-de-oliveira-joy" },
      });
      this.setState({
        AllTracks: res.data.result.tracks,
        idPlaylistSelecionada: idPlaylist,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  deleteMusic = (idPlaylist,id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}`
    axios.delete(url, {
        headers: {
          Authorization: "athos-de-oliveira-joy"
        }
    })
        .then((res) => {
            alert("Musica deletada com sucesso!")
            this.exibirTracks()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente Mais tarde")
        })
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
        alert("Ocorreu um erro, tente novamente  Mais tarde")
      })
  }




  render() {
    const playMusic = this.state.AllTracks.map((music) => {
      return (
      <div key={music.id}>

     {`(${music.artist})`}
     <Tracks src={music.url} autoplay="autoplay" controls="controls" />

    <NomeMusica> {music.name}</NomeMusica>
     <button onClick={() => this.deleteMusic(music.id)}>Delete</button>
      </div>
    )})



    const playLista = this.state.AllLists.map((list) => {
      return (
        <div>
        <CardPlaylist key={list.id} onClick={() => this.exibirTracks(list.id)}>
          <p>{list.name}</p>
          <BotaoDeletar onClick={() => this.deleteList(list.id)}>Remove </BotaoDeletar>
         
          <BotaoAdicionar    onChange={this.handleNameMusic}
               key={list.id} onClick={() => this.adicionarTrack(list.id)} >Adicionar Musica</BotaoAdicionar>
          <ContainerInputs>
          {this.state.exibir === list.id ? (
          <Inputs placeholder="Nome da Musica" value={this.state.nameMusic} onChange={this.handleNameMusic}/>
          ) : (
            ""
          )}
          {this.state.exibir === list.id ? (
          <Inputs placeholder="Nome do Artista" value={this.state.nameArtist} onChange={this.handleArtist}/>
          ) : (
            ""
          )}
          {this.state.exibir === list.id ? (
          <>
          <Inputs placeholder="Url da Musica" value={this.state.urlMusic} onChange={this.handleURL}/>

          <button onClick={() => this.addMusic(list.id)}> Salvar </button>
          </>
          ) : (
            ""
          )}
      
          </ContainerInputs>
          </CardPlaylist>
            {this.state.idPlaylistSelecionada === list.id ? (
              <div>{playMusic}</div>
            ) : (
              ""
            )}
          </div>
      )
    })



    return (
      <div>
        <button onClick={this.props.goCadastro}>Voltar ao Cadastro</button>
        <h1>Tela Lista</h1>
       <div>{playLista}</div>
       
      </div>
    );
  }
}