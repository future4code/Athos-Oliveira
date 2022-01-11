
import React,{useEffect , useState}from "react"; 
import axios from "axios"
import styled from "styled-components"
import Cabeca from "./cabeca"

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 420px;
height: 80vh;
border: 1px solid black; 
border-radius: 5px;
`

function Match() {
  return (
    <Box>
    <Cabeca/>
    </Box>
  );
}

export default Match;