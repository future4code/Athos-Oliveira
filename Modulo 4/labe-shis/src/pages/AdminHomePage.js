import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const AdminHomePage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  // const goToAdminHomePage = () => {
  //   history.push("/admin/trips/list");
  // };

  return (
    <div>
      Painel Administrativo
      <button onClick={goBack}>Voltar</button>
      <button> Enviar</button>
    </div>
  );
};
