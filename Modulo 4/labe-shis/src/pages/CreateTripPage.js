import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import { countries } from "../constants/countries";
import { urlGetTrips } from "../constants/url";
import axios from "axios";
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

const Body = styled.div`
  color: white;
  font-family: Roboto ;
  text-align: center;
  background-image: url("https://s1.1zoom.me/b5050/402/Planets_Clouds_558854_1920x1080.jpg");
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
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
const Input = styled.input`
display: flex;
color: white;
border-color:purple;
font-family: Roboto ;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40vw;
    color: black;
    font-size: 100%;
    margin: 1vh;
    padding: 2vh;
    text-align: start;


`
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

export const CreateTripPage = () => {
  const history = useHistory();
  const [viagens, setViagens] = useState([]);

  
  
  const {form, alterarForm, clean} = useForm({
    name: "",
    planet: "",
    date:"",
    description: "",
    durationInDays:"",
})


    const enviarForm = (id) => {
      id.preventDefault();
      const token = localStorage.getItem("token")
      const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays,
      };




    axios.post(`${urlGetTrips}`, body, {
        headers:{
            auth: token
        }
    })
    .then((response) => {
        alert("Viagem Incluída com sucesso")
    })
    .catch((error) => {
        alert(`Erro, ${error.response.data}, tente novamente`)
    })
}

  const goBack = () => {
    history.goBack();
  };



  return (
    <Body>
      <Titulo1>Cria Viagem</Titulo1>


      <form onSubmit={enviarForm}>
     
        
          <Input
            required
            placeholder={"Nome "}
            type={"text"}
            name={"name"}
            onChange={alterarForm}
            value={form.name}
          />
          <Input
            required
            placeholder={"Planeta"}
            type={"text"}
            name={"planet"}
            onChange={alterarForm}
            value={form.planet}
          />

          <Input
            required
            title={"A data deve ser no formato DD/MM/AAAA"}
            placeholder="DD/MM/AAAA"
            name={"date"}
            type={"text"}
            onChange={alterarForm}
            value={form.date}
          />
           <Input
            required
            placeholder={"Periodo"}
            type={"Number"}
            name={"duration"}
            onChange={alterarForm}
            value={form.duration}
          />
         
      

      <Body2>
        <ThemeProvider theme={customTheme}>
          <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={goBack}>
              Voltar
            </Button>
          </Box>
          <Box m={2} pt={0}>
            <Button type={'submit'} color="primary" variant="contained">
              Enviar
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
      </form>
    </Body>
  );
};
