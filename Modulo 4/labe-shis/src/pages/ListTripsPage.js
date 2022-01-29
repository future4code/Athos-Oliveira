import React from "react";
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

export const ListTripsPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  return (
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
    </Body>
  );
};
