import React from 'react';
import styled from 'styled-components';
//simport './CardGrande.css'

const CardGrandeContainer = styled.div`
  display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemCardGrand = styled.img`
  width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const CardGrandeConteiner2 = styled.div`
display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Texto = styled.h4`
 margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <ImagemCardGrand src={ props.imagem } />
            <CardGrandeConteiner2>
                <Texto>{ props.nome }</Texto>
                <p>{ props.descricao }</p>
            </CardGrandeConteiner2>
            </CardGrandeContainer>
    )
}

export default CardGrande;