
import React from 'react';
import styled from 'styled-components'


const ContainerPrincipal = styled.div`
color:white;
text-align:center;
background-image:url("https://styledme.com/wp-content/uploads/2021/02/mario-zoom-background.jpg");
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin:0;
padding: 0;
`
const ContainerMenuChat = styled.div`
  

    color: black;
    font-size: 100%;
    margin-right: 1px;
    padding: 2%;
    display:flex;     
  
`
const BotaoEnviar = styled.button`
    width:5vw;
    height:7vh;
  
    background: #0099FF;
    border: 2% solid;
    border-radius: 3%;
    color: #FDFDFD;
    font-size: 100%large;
   
    
    :hover{
        background:#2277ff;
        border: 2% solid #2277ff;
     

    }
    :active{
        background:gray;
        color: #FDFDFD;
        border: 2% solid #FDFDFD;
    }
    
`
const InputUsuario = styled.input`
    width:5vw;
    
    color: black;
    font-size: 100%;
    margin-right: 1px;
    padding: 2%;
    text-align: start;
`
const InputMensagem = styled.input`
    
    width:26vw;
    color: black;
    font-size: 100%;
    margin-right: 1px;
    padding: 2%;
    
`
const ContainerChat = styled.div`
    
    background-color:#efefef;    
    width: 40vw;
    height: 90vh;
    
    
`
const BalaoDaMensagem = styled.div`
  background-color: lightgreen;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const ContainerControles = styled.div`
  margin: 1px 1px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  column-gap: 1px;
  position: fixed;
  bottom: 1%;
`;

const ContainerMensagens = styled.div`
  display: flex;
  flex-direction: column;
`;


// Criar dois inputs: usuario e texto
// Guardar o conteúdo dos inputs (input controlado)
// Guardar a lista de mensagens no estado
// Ao apertar enviar, guardar a mensagem na lista do estado
// Mostrar a lista de mensagens na tela

class App extends React.Component {
  state = {
    usuario: "",
    texto: "",
    listaDeMensagens: []
  };

  componentDidMount() {
    this.pegarMensagens();
    const usuarioLS = localStorage.getItem("usuario") || "";
    const textoLS = localStorage.getItem("texto") || "";

    this.setState({ usuario: usuarioLS, texto: textoLS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.texto !== this.state.texto) {
      localStorage.setItem("texto", this.state.texto);
      console.log("Salvei texto");
    }

    if (prevState.usuario !== this.state.usuario) {
      localStorage.setItem("usuario", this.state.usuario);
      console.log("Salvei usuario");
    }
  }

  mudaUsuario = (e) => {
    this.setState({ usuario: e.target.value });
  };

  mudaTexto = (e) => {
    this.setState({ texto: e.target.value });
  };

  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuario,
      texto: this.state.texto
    };
    const novaLista = [...this.state.listaDeMensagens, novaMensagem];

    // Salvando no Local Storage
    localStorage.setItem("historicoMensagens", JSON.stringify(novaLista));

    this.setState({ listaDeMensagens: novaLista });
    this.limpar();
  };

  limpar = () => {
    this.setState({ usuario: "", texto: "" });
  };

  pegarMensagens = () => {
    const mensagens =
      JSON.parse(localStorage.getItem("historicoMensagens")) || [];
    this.setState({ listaDeMensagens: mensagens });
  };

  render() {
    const componentesMensagem = this.state.listaDeMensagens.map(
      (msg, index, array) => {
        return (
          <BalaoDaMensagem key={index}>
            <strong>{msg.usuario}:</strong> {msg.texto}
          </BalaoDaMensagem>
        );
      }
    );

    return (
      <ContainerPrincipal>
        <h1>WhatsLab</h1>
        <ContainerChat>
        <ContainerMensagens>{componentesMensagem}</ContainerMensagens>

      <ContainerMenuChat>
        <ContainerControles>
          <InputUsuario
            value={this.state.usuario}
            onChange={this.mudaUsuario}
            placeholder="Usuário"
          />
          <InputMensagem
            value={this.state.texto}
            onChange={this.mudaTexto}
            placeholder="Texto da Mensagem"
          />
          <BotaoEnviar onClick={this.enviarMensagem}>Enviar</BotaoEnviar>
        </ContainerControles>
        </ContainerMenuChat>
        </ContainerChat>
        
      </ContainerPrincipal>
    );
  }
}

export default App;
