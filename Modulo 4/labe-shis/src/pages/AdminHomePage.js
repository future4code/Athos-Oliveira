import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import {urlGetTrips} from '../constants/url'
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
  background-size: cover;
  background-image: url("https://s1.1zoom.me/b5050/402/Planets_Clouds_558854_1920x1080.jpg");
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: Roboto ;
  height: 200vh;
  border: none;

`;
const Body2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-family: Roboto ;
`;
const BoxButtons = styled.div`
display: flex;
font-family: Roboto ;
  justify-content: center;
  flex-direction: row;
  align-items: center;`

const Card = styled.div`
  display: flex;
  font-family: Roboto ;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size:100%;
  font-family:roboto;
  border: 1px solid purple;
  border-radius: 10px;
  margin: 2vh;
  padding:0vh;

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

export const AdminHomePage = () => {
  const history = useHistory();
  const[data,setData] = useState([])

  useEffect(() => {
    axios.get(urlGetTrips)
    .then((response) =>{
        setData(response.data.trips)
    })
    .catch((error) => {
        alert("Erro, tente mais tarde")
    })
}, [])

const deleteTrip = (id) => {
  const token = localStorage.getItem("token")

  axios.delete(`${urlGetTrips}/${id}`,{
      headers:{
          auth: token
      }
  })
  .then((response) => {
      alert("Viagem deletada com sucesso")
  })
  .catch((error) => {
      alert(`Erro ${error.response.data}, tente novamente`)
  })
}

  const goBack = () => {
    history.push("/");
  };

  const goToPage = () => {
    history.push("/tripdetails");
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goLogout = () => {
    history.replace("/login");
  };
  const allTrips = data.map((trip) => {
    return(
        <Card key={trip.id}>
            {/* {trip.name} */}
          <p> {trip.planet}</p>
            {/* {trip.date} */}
            {/* {trip.durationInDays} */}
           <p>{trip.description}</p>
            <BoxButtons> 
            <ThemeProvider theme={customTheme}>
            <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={() => goToPage(`/tripdetails/${trip.id}`, history)}>Detalhar</Button>
            </Box>  
             <Box m={2} pt={0}>
                <Button
              color="primary"
              variant="contained" onClick={() => deleteTrip(trip.id)}>Deletar</Button>
          </Box>  
          </ThemeProvider>
           </BoxButtons>
        </Card>
    )
})
  return (
    <Body>
      <Titulo1>Painel Administrativo</Titulo1>
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
              onClick={goToCreateTripPage}
            >
              Cria Viagem
            </Button>
          </Box>
          <Box m={2} pt={0}>
            <Button color="secondary" variant="contained" onClick={goLogout}>
              Logout
            </Button>
          </Box>
        </ThemeProvider>
      </Body2>
      <div>{allTrips}</div>
     
    </Body>
  );
};
