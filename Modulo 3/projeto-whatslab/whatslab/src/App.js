import React from 'react';
import styled from 'styled-components'
import ChatContainer from './Componentes/CardChat';
import MenuChat from "./Componentes/MenuChat";

const ContainerPrincipal = styled.div`
color:white;
text-align:center;
background-image:url("https://styledme.com/wp-content/uploads/2021/02/mario-zoom-background.jpg");
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin:0;
padding: 0;
`


function App() {
  return (
    //div app

<ContainerPrincipal>
 Chat
 
<ChatContainer>
<MenuChat>  </MenuChat>

</ChatContainer>

</ContainerPrincipal>
  );
}

export default App;
