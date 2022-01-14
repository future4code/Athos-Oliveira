import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Cabeca from "./cabeca";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5px;
`;
const FotoQuadro = styled.div`
height:80%;
width:98%;
display:flex;
align-items:center;
justify-content:center;
overflow: hidden;
overflow: center;
`

const Imagem = styled.img`
max-height:500px;
max-width:100vw;
`



const FooterBotoes = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-evenly;
  width: 50vw;
  height: 20vh;
 
  
`;

export default function Match(props) {
  const [fotos, setFotos] = useState({});
const[vaiRolar, setVairolar] = useState([]);

  const pegaFotos = async () => {
    await axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/almeida/person`
    ).then((response) => {
      setFotos(response.data.profile)
    }).catch((error) => {
      console.log(error)
    })
  };

  useEffect(() => {
    pegaFotos();
  }, []);

const gostei =()=>{
const body = {
  id:fotos.id, 
  choise: fotos.true
}
axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/almeida/choose-person`,
body,
{
  headers:{
    Autorization:"almeida"
  }}
  ).then((response) => {
    setVairolar(response.data.profile)
  }).catch((error) => {
    console.log(error)
  })

} 


  return (
    <Box>
      <Cabeca />
      <FotoQuadro>
        <Imagem src={fotos.photo} />
      </FotoQuadro>
      <p>{fotos.name}, {fotos.age}</p>
      <p>{fotos.bio}</p>
    <FooterBotoes>
<button onClick={()=>gostei }>OK</button>
<button>NO</button>
    </FooterBotoes>

    </Box>
  );
}
