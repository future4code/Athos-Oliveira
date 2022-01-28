import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
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
  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  return (
    <Body>
      <Titulo1>Login</Titulo1>
      <input placeholder="Nome" />
      <input placeholder="Senha" />
      <ThemeProvider theme={customTheme}>
        <Button color="secondary" variant="contained" onClick={goBack}>
          Voltar
        </Button>

        <Button color="primary" variant="contained" onClick={goToAdminHomePage}>
          Entrar
        </Button>
      </ThemeProvider>
    </Body>
  );
};
