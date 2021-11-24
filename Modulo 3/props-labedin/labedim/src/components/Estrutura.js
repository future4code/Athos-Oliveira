import React from 'react';
import styled from "styled-components";

const App = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const MeuBody = styled.body`
 padding: 0;
    margin: 0;
    box-sizing: border-box;
`
const PageSection = styled.div`
width: 40vw;
margin: 10px 0;
`

const TextoPageSection = styled.h3 `
text-align: center;
margin-bottom: 20px;
`
const Texto2pageSection = styled.h2`
display: flex;
justify-content: center;
margin-bottom: 20px;
`

export default {App,MeuBody,PageSection,TextoPageSection,Texto2pageSection};


  
