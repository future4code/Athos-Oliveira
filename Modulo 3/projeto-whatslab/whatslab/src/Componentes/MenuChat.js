import React from 'react';
import styled from 'styled-components'
import { useState } from "react";
import ReactDOM from 'react-dom';

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


const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The name you entered was: ${}");
  }

function ContainerMenu(props) {
    return (
        <div>
        <ContainerMenuChat>
        <form onSubmit={handleSubmit}>
         <InputUsuario type="text"  placeholder="Usuario" />
         <InputMensagem  type="text"  placeholder="Mensagem" />
         
         <BotaoEnviar type="submit">Enviar</BotaoEnviar>
         </form>
         </ContainerMenuChat>
        
       </div>
    )
}


export default ContainerMenu