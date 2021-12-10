import React from "react";
import Axios from "axios";
import axios from "axios";

export default class App extends React.Component {
  state = {
  
    Usuarios: []

  };

  //monta usuarios no storage com o metodo GET
  componentDidMount() {
    this.getMostarUsuarios();
  }

  LimparTela = () => {
   let totalUsuarios = "null2"
    
  };

  //receita de bolo - mesmo padrao
  //funcao GET na API
  getMostarUsuarios = () => {
    Axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/` ,
      
      {
        headers: {
          Authorization: "athos-de-oliveira-joy"
        }
      }
    )
      .then((response) => {
        this.setState({ Usuarios: response.data });
        console.log(JSON.stringify(response.data));
        console.log(this.state.Usuarios)

      })
      .catch((err) => {

        console.log(err.data)
        console.log("GET - algo deu errado");
      });
  };
  //funcao POST na API
  postCriaUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    //body do POST da API = corpo JSON
    const body = {   
      name: this.state.inputName,
      email: this.state.inputMail
    }

    const headers = {
      headers: {
        Authorization: "athos-de-oliveira-joy"
      }
    }

    axios
      .post(URL, body, headers)
      .then((res) => {
        //pegou o GET e jogou no POST
        //this.getMostarUsuarios();
        console.log("sucesso com POST")
        alert("Cadastrado com Sucesso!!")
      })
      .catch((err) => {
        console.log(err.data)
        console.log("POST - com erro")
        alert("Erro: Informe um email completo!")
      })
  }

//Delete
deleteUsuario = (id) => {
 
  axios.delete(
   `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers: {
        Authorization: "athos-de-oliveira-joy"
      }
    }
  )
    .then((response) => {

    this.getMostarUsuarios(response)
      alert("Deletado Com Sucesso")

    })
    .catch((err) => {

      console.log(err.data)
      alert("ERRO: Ao Excluir")
    });
};



  //pega dados do intup controlado pelo onChange
  updateName = (e) => {
    this.setState({ inputName: e.target.value })
    console.log("setState muda nome")
  }
  updateMail = (e) => {
    this.setState({ inputMail: e.target.value })
    console.log("setState muda email")
  }


  render() {

    //esse map cria um novo arrai apartir do array do estado   
 
   const  totalUsuarios = this.state.Usuarios.map((lista) => {
    return <div>
     <p key={lista.id} /> 
     USUARIOS: &nbsp; {lista.name} &nbsp;  &nbsp;   
     <button onClick={() => this.deleteUsuario(lista.id)}>Delete</button>
     </div>
    });


    return (
      <div>

        <p> &nbsp;Login</p>
        <div>
          <input placeholder="User Name"
            value={this.state.inputName}
            onChange={this.updateName}
          />&nbsp;

          <input placeholder="User Mail"
            value={this.state.inputMail}
            onChange={this.updateMail}
          />&nbsp;
        </div>
        <hr />
        <div>
          <button onClick={this.postCriaUsuario}> Adicionar</button> &nbsp;
          <button onClick={this.LimparTela}>Voltar</button> &nbsp;
          <button onClick={this.getMostarUsuarios}>Mostrar Tudo</button>
        </div>

        <hr />
        <div>
          <p>{totalUsuarios}</p>
          {/* <p>{novototalUsuarios}</p> */}
     
     
        </div>
      </div>
    )
  }
}
