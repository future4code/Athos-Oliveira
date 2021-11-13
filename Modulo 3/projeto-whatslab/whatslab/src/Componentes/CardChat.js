import React from 'react';
import styled from 'styled-components'
import MenuChat from "./MenuChat";

const ContainerChat = styled.div`
    
    background-color:#efefef;    
    width: 40vw;
    height: 90vh;
    

    display:flex;
`
const Container = styled.div`
background-color:#efefef;    
    width: 40vw;
    
    `

function ChatContainer(props) {
    return (
        <Container>
        <ContainerChat>
          
      
        </ContainerChat>
        <MenuChat />
        </Container>
    )
}


export default ChatContainer