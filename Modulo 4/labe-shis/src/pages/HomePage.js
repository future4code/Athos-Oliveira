import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
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
  font-family: Roboto ;
  text-align: center;background-size: cover;
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

const customTheme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: purple
  }
});

export const HomePage = () => {
  const history = useHistory();

  const goToAreaAdmin = () => {
    history.push("/login");
  };

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  return (
    <Body>
      <Titulo1>LABE X</Titulo1>

      <Body2>
        <ThemeProvider theme={customTheme}>
          <Box m={2} pt={0}>
            <Button
              color="secondary"
              variant="contained"
              onClick={goToListTripsPage}
            >
              Lista de Viagens
            </Button>
          </Box>
          <Box m={2} pt={0}>
            <Button color="primary" variant="contained" onClick={goToAreaAdmin}>
              Area Adm
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
    </Body>
  );
};
