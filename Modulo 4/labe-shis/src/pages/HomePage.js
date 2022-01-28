import React from "react";
import { useHistory } from "react-router-dom";
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
`;

const Button2 = styled.button`
margin: 2%;
`

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
  
      <p>
        <ThemeProvider theme={customTheme}>
          
          <Button
            color="secondary"
            variant="contained"
            onClick={goToListTripsPage}
          >
            Lista de Viagens
          </Button>
         
          <Button color="primary" variant="contained" onClick={goToAreaAdmin}>
            Area Adm
          </Button>
        </ThemeProvider>
      </p>
    </Body>
  );
};
