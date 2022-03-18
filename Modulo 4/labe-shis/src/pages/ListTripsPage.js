import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import {urlGetTrips} from '../constants/url'
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";

const Body = styled.div`
  color: white;
  text-align: center;
  background-size: cover;
  background-image: url("https://s1.1zoom.me/b5050/402/Planets_Clouds_558854_1920x1080.jpg");
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: Roboto ;
  height: 200vh;
  border: none;

`;
const Body2 = styled.div`
  display: flex;
  font-family: Roboto ;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
const BoxButtons = styled.div`
display: flex;
font-family: Roboto ;
  justify-content: center;
  flex-direction: row;
  align-items: center;`

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size:100%;
  font-family:roboto;
  border: 1px solid purple;
  border-radius: 10px;
  margin: 2vh;
  padding:0vh;

`;

const Titulo1 = styled.h1`
  margin-top: 10vh;
  font-family: Roboto ;
  margin-bottom: 10vh;
`;


const customTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: purple
  }
});

export const ListTripsPage = () => {
  const history = useHistory();
  const [listaViagens, setListaViagens] = useState([]);

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  const listarViagens = async () => {
    try {
      const response = await axios.get(urlGetTrips);
      setListaViagens(response.data.trips);
    } catch {
      alert("Deu erro");
    }
  };

  useEffect(() => {
    listarViagens();
    console.log(viagens)
  }, []);

  const viagens = listaViagens.map((pessoa) =>{
return(
  <Card>
  <h2>{pessoa.name}</h2>
 {pessoa.description} 
  <h3> {pessoa.planet} </h3>
   Duração em dias: {pessoa.durationInDays} 
 < p>{pessoa.date}</p> 
  <href />
  
</Card>
    );
  });


  return (
    <div>
   
    <Body>
      <Titulo1>Lista de Viagens</Titulo1>
     
      <Body2>
   
        <ThemeProvider theme={customTheme}>
          <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={goBack}>
              Voltar
            </Button>
          </Box>
          <Box m={2} pt={0}>
            <Button
              color="primary"
              variant="contained"
              onClick={goToApplicationFormPage}
            >
              Inscrevar-se
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
     <div> {viagens}</div>
    </Body>
  

    </div>
  );
};
