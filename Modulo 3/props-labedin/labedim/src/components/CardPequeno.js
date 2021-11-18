import React from 'react';
//import './CardPequeno.css'
import styled from 'styled-components';

const CardPequeno2 = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 80px;
color:red;
`;
const ImgCardPequeno = styled.img`
 width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
`;
const TextoCardPequeno = styled.div`
display:flex;
justify-content:center;
 align-items:center;
margin-left: 8px;
`
const Endereco = styled.p`
display:flex;
 margin-left: 8px;
 justify-content:center;
 align-items:center;
`

function CardPequeno(props) {
    return (
       <CardPequeno2>
         <ImgCardPequeno src={props.icone} />
           <TextoCardPequeno>
                <h4>{props.texto2}</h4>
                 <Endereco>{props.endereco}</Endereco>
                 </TextoCardPequeno>
                 </CardPequeno2>

    )


}
export default CardPequeno;