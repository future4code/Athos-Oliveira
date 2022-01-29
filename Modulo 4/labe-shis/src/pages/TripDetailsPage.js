import React from "react";
import { useHistory, useParams } from "react-router-dom";
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
import { BASE_URL } from "../constants/url";

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

export const TripDetailsPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  // const goToApplicationFormPage = () => {
  //   history.push("/trips/application");
  // };
  const { id } = useParams();
  const [trip, setTrip] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/athos-de-oliveira-joy/trips/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      );
      setTrip(data);
    };
    const token = localStorage.getItem("token")
if(token)fetch();
else history.replace("/login");
    
  }, []);

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
    </Body>
  );
};
