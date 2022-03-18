import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import {urlLogin} from '../constants/url'
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
import { createTheme } from '@material-ui/core/styles';



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
const Titulo1 = styled.h1`
  margin-top: 10vh;
  font-family: Roboto ;
  margin-bottom: 10vh;
`;

const Input = styled.input`
display: flex;
font-family: Roboto ;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40vw;
    color: black;
    font-size: 100%;
    margin: 2vh;
    padding: 2%;
    text-align: start;

`

const customTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: purple
  }
});

export const AreaAdmin = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };


  const [form, setForm]  =useState({email:"", password:"" })
  const onChange =(e)=>{
const {name, value} = e.target
setForm({...form, [name]:value})

  }



  const onSubmitLogin = (event) => {
    event.preventDefault();
    const body = { email: form.email, password: form.password };
     axios.post(urlLogin,body)
      .then(({ data }) => {
        
        localStorage.setItem("token", data.token);
        history.push("/admin/trips/list");
        alert("Bem Vindo a area Exclusiva");
      })
      .catch((res) => console.log(res));
  
  };

  return (
    <Body>
        
      <Titulo1>Login</Titulo1>
      <form onSubmit={onSubmitLogin}>
      <Input 
      placeholder="Email" 
      name="email" 
      type="email" 
      value={form.email}
      required  
      onChange={onChange} 
      />

      <Input
        placeholder="Senha"
        name="password"
        type="password"
        value={form.password}
        required
        pattern={"^.{3,}"}
        title={"So é permitido no minimo 3 digitos."}
        onChange={onChange}
      />

      <Body2>
        <ThemeProvider theme={customTheme}>
          <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={goBack}>
              Voltar
            </Button>
          </Box>
          <Box m={2} pt={0}>
            <Button type={'submit'} color="primary" variant="contained" >
              Entrar
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
      </form>
    </Body>
  );
};
