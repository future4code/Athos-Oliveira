import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import {urlDetailTrip} from "../constants/url";
import styled from "styled-components";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";

import { useEffect, useState } from "react";
import axios from "axios";


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
  height: 100vh;
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
  font-family: Roboto ;
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

export const TripDetailsPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  const params = useParams()
  const [trip, setTrip] = useState({});

  const { id } = useParams();
  const token = localStorage.getItem("token")
//   useEffect(() => {
//     const fetch = async () => {
//         const { data } = await  axios.get(`${urlDetailTrip}/${id}`, {
//             headers: {
//                 auth: token
//             }
//         });
//         setTrip(data);
//     };
//     fetch();
// }, []);
  
  useEffect(() => {
      axios.get(`${urlDetailTrip}/${id}`, {
          headers:{
              auth: token
          }
      })
      .then((response) => {
          setTrip(response.data.trip)
      })
      .catch((error) => {
          alert("Erro, tente novamente")
      })
      
  },[])




  return (
    <Body>
      <Titulo1>Nome</Titulo1>

      <Body2>
        <ThemeProvider theme={customTheme}>
          <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={goBack}>
              Voltar
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
      <Card>
           
            <h2>Nome:</h2>
            <p>{trip.name}</p>
            <h2>Aprovados</h2>
            <p>{trip.approved && trip.approved.map((approved) => approved.name)}</p>
            <h2>Lista de Candidatos</h2>

            <div>{trip.pessoas && trip.pessoas.map((tripulante)=>{
                return(
                    <div key={tripulante.id}>
                        <ul>Nome: {tripulante.name}</ul>
                        <ul>Idade: {tripulante.age}</ul>
                        <ul>Cidade: {tripulante.country}</ul>
                        <ul>Profissão: {tripulante.profession}</ul>
                        <ul>Teste de Aplicação: {tripulante.applicationText}</ul>
                     
                    </div>
                )
                })}
            </div>
        </Card>
    </Body>
  );
};
