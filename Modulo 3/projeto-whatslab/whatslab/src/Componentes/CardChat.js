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
        <div>
        <Container>
        <ContainerChat>
            
          
        </ContainerChat>
        <MenuChat />
        </Container>
    </div>
    )
}


export default ChatContainer