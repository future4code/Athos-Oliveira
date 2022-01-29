import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, BASE_url } from "../constants/url";
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

  /* display: flex;

  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center; */
`;
const Body2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
const Titulo1 = styled.h1`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

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
  // const goToAdminHomePage = () => {
  //   history.push("/admin/trips/list");
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangerEmail = ({ target }) => {
    setEmail(target.value);
  };

  const onChangerPassword = ({ target }) => {
    setPassword(target.value);
  };
  const onSubmitLogin = (event) => {
    event.preventDefault();
    const body = { email: email, password: password };
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login", 
      body
     
      )
      .then(({ data }) => {
        alert("Bem Vindo a area Exclusiva")
        localStorage.setItem("token", data.token);
        history.push("/admin/trips/list");
      })
      .catch((res) => console.log(res));
      alert("Email/Senha Invalidos ")
  };

  return (
    <Body>
      <Titulo1>Login</Titulo1>
      <input placeholder="Email" value={email} onChange={onChangerEmail} />
      <input placeholder="Senha" value={password} onChange={onChangerPassword} />

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
              onClick={onSubmitLogin}
              // onClick={goToAdminHomePage}
            >
              Entrar
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
    </Body>
  );
};
