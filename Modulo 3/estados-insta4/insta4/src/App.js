import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/70?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
           <Post
          nomeUsuario={'Paulinho'}
          fotoUsuario={'https://picsum.photos/50/40?random=1'}
          fotoPost={'https://picsum.photos/200/190?random=1'}
        />
           <Post
          nomeUsuario={'Pedrinho'}
          fotoUsuario={'https://picsum.photos/50/30?random=1'}
          fotoPost={'https://picsum.photos/200/130?random=1'}
        />
      </MainContainer>
    );
  }
}

export default App;
