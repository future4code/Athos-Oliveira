import React from "react";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
  const history = useHistory();

  const goToAreaAdmin = () => {
    history.push("/login");
  };

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  return (
    <div>
      <p>LABE X</p>
      <iframe
        src="https://giphy.com/embed/5xtDarqCp0eomZaFJW8"
        width="480"
        height="360"
        frameBorder="0"
        // para resolver o warning, coloquei esse title aqui
        title="Gif de Home"
      ></iframe>
      <p>
        <button onClick={goToListTripsPage}>Lista de Viagens</button>
        <button onClick={goToAreaAdmin}>Area Adm</button>
        {/* <button onClick={goToContactsPage}>Contatos</button> */}
      </p>
    </div>
  );
};
