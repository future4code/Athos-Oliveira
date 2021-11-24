import React from 'react';
import styled from 'styled-components'
// import { useState } from "react";
// import ReactDOM from 'react-dom';
import { Component } from 'react';

const ContainerMenuChat = styled.div`
   
  padding:0;
  margin:0;
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

//const [name, setName] = useState("");


// const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("The name you entered was: ${}");
//   }

export class ContainerMenu extends Component {
    render() {
        let exercicio;

        switch (this.state.exercicioSelecionado) {
          case "1":
            exercicio = "Bananinha";
            break;
          case "2":
            exercicio = "Maria";
            break;
          case "3":
            exercicio = "Paulo";
            break;
          case "4":
            exercicio = "Joao";
            break;
        //   case "5":
        //     exercicio = <Exemplo5 />;
        //     break;
        //   case "6":
        //     exercicio = <Exemplo6 />;
        //     break;
        //   case "7":
        //     exercicio = <Exemplo7 />;
        //     break;
        //   case "8":
        //     exercicio = <Exemplo8 />;
        //     break;
          default:
            exercicio = null;
        }
    
        const options = ["1", "2", "3", "4"];



    return (
        <div>
        <ContainerMenuChat>
        <select
            placeholder="Mensagem"
            value={this.state.exercicioSelecionado}
            onChange={(e) =>
              this.setState({ exercicioSelecionado: e.target.value })
            }
          >
            {options.map((optionValue) => (
              <option value={optionValue}>{optionValue}</option>
            ))}
          </select>
         <InputUsuario   placeholder="Usuario" value={''}onChange={this.onChangeComentario}/>
         <InputMensagem    placeholder="Mensagem"value={''}onChange={this.onChangeComentario} />
         <BotaoEnviar onClick={this.props.aoEnviar}>Enviar</BotaoEnviar>
        
         </ContainerMenuChat>
        
       </div>
    )
}
}

export default ContainerMenu