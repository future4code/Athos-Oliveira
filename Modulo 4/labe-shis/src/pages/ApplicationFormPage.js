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
  font-family: Roboto ;


`;
const Body2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-family: Roboto ;
`;
const Titulo1 = styled.h1`
  margin-top: 10vh;
  margin-bottom: 10vh;
  font-family: Roboto ;
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

const Select =styled.select`
display: flex;
color: white;
border-color:purple;
font-family: Roboto ;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 42vw;
    color: black;
    font-size: 100%;
    margin: 1vh;
    padding: 2vh;
    text-align: start;
`
const Option =styled.option`
display: flex;
color: white;
border-color:purple;
font-family: Roboto ;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 42vw;
    color: black;
    font-size: 100%;
    margin: 1vh;
    padding: 2vh;
    text-align: start;
`
const Textarea =styled.textarea`
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

const customTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: purple
  }
});

export const ApplicationFormPage = () => {
  const history = useHistory();
  const [viagens, setViagens] = useState([]);
  const goBack = () => {
    history.goBack();
  };


  const { form, alterarForm, clean } = useForm({
    id: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  
  useEffect(() => {
    axios
      .get(`${urlGetTrips}/trips`,
      )
      .then((res) => {
        setViagens(res.data.trips);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const enviarForm = (id) => {
    id.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios
      .post(
        `${urlGetTrips}/${form.id}/apply`,
        body
      )
      .then((response) => {
        alert("Dados enviados");
        clean();
      });
  };

  return (
    <Body>
      <Titulo1>Inscreva-se para uma viagem</Titulo1>

      <form onSubmit={enviarForm}>
      <Select
            placeholder={"Viagem"}
            name={"id"}
            value={form.id}
            onChange={alterarForm}
            required
          >
          <Option>Selecione sua viagem</Option>
            {viagens.map((pessoa) => {
              return (
                <Option key={pessoa.id} value={pessoa}>
                  {pessoa.name}
                </Option>
              );
            })}
          </Select>   

          <Input
            required
            placeholder={"Nome completo"}
            type={"text"}
            name={"name"}
            onChange={alterarForm}
            value={form.name}
          />
          <Input
            required
            placeholder={"Idade"}
            type={"number"}
            name={"age"}
            onChange={alterarForm}
            value={form.age}
          />
          <Textarea
            placeholder={
              "Observação para essa viagem. (500 caraceteres no máximo.)"
            }
            type={"text"}
            name={"applicationText"}
            onChange={alterarForm}
            value={form.applicationText}
            maxLength={500}
          />
          <Input
            required
            placeholder={"Profissão"}
            type={"text"}
            name={"profession"}
            onChange={alterarForm}
            value={form.profession}
          />
          <Select
            placeholder={"País"}
            name={"country"}
            value={form.country}
            onChange={alterarForm}
            required
          >
            <Option value={""} disabled>
              Escolha um País
            </Option>
            {countries.map((country) => {
              return (
                <Option value={country} key={country}>
                  {country}
                </Option>
              );
            })}
          </Select>

      <Body2>
        <ThemeProvider theme={customTheme}>
          <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={goBack}>
              Voltar
            </Button>
          </Box>
          <Box m={2} pt={0}>
            <Button  
            type={"submit"}
            variant="contained" 
            color="primary" variant="contained">
              Enviar
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
      </form>
    </Body>
  );
};
