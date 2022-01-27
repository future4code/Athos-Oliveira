import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const AdminHomePage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const goLogout = () => {
    history.replace("/login");
  };

  return (
    <div>
      Painel Administrativo
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTripPage}> Cria Viagem</button>
      <button onClick={goLogout}>Logout</button>
    </div>
  );
};
