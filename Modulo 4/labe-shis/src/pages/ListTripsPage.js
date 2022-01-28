import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
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
      {/* {language === "pt" ? (
        <p>
          <b>Sobre nos: </b>Na Labenu você aprende a programar do zero! Nossa
          formação Web Full Stack contém experiências focadas em empregabilidade
          para ingressar no mercado de tecnologia. O curso tem duração de 6
          meses no modelo integral ou 12 meses no modelo noturno. Aulas ao vivo
          e de onde você estiver.
        </p>
      ) : (
        <p>
          <b>About us: </b>At Labenu you learn to program from scratch! Our Web
          Full Stack training contains experiences focused on employability to
          enter the technology market. The course lasts for 6 months in the full
          model or 12 months in the evening model. Live classes wherever you
          are.
        </p>
      )} */}
      <p>
        <Titulo1>Lista de Viagens</Titulo1>

        <ThemeProvider theme={customTheme}>
          <Button color="secondary" variant="contained" onClick={goBack}>
            Voltar
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={goToApplicationFormPage}
          >
            Inscrevar-se
          </Button>
        </ThemeProvider>
      </p>
    </Body>
  );
};
