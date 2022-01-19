import './App.css';
import React, { useState, useEffect } from "react";
// import axios from "axios";
import styled from 'styled-components'

const Main = styled.div`
margin-top:20vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const LabeX = styled.p`
color: #4B8BEC;
position: relative;
font-family: verdana Bold;
font-size: 300%;
`

const BotaoAzul = styled.button`

/* width: 100wh; */
height: 10vh;
background: #4B8BEC;
border-radius: 25px;
font-family: verdana;
font-size: 200%;
color: #FFFFFF;
margin-left:10px;
margin-right:10px;
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

function App() {
  return (
    <Main>
      <div>
      <LabeX>Labe - X</LabeX>
      </div>
      <div>
      <BotaoAzul> Ver Viagens  </BotaoAzul> 
      <BotaoAzul>Area Admin </BotaoAzul> 
      </div>

    </Main>
  );
}

export default App;
