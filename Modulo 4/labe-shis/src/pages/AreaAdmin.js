import React from "react";
import { useHistory, useParams } from "react-router-dom";
export const AreaAdmin = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  return (
    <div>
      Login
      <input placeholder="Nome" />
      <input placeholder="Senha" />
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToAdminHomePage}>Entrar</button>
    </div>
  );
};
