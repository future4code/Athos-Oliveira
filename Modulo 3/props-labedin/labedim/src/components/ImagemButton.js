import React from 'react';
//import './ImagemButton.css'
import styled from 'styled-components';

const ImagemBotao = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
`
const Img = styled.img`
    width: 30px;
    margin-right: 10px;
`
const textoButton = styled.p`
`
function ImagemButton(props) {
    return (
        <ImagemBotao>
         <Img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemBotao>

    )
}

export default ImagemButton;