import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const ApplicationFormPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  // const goToApplicationFormPage = () => {
  //   history.push("/trips/application");
  // };

  return (
    <div>
      Inscreva-se para uma viagem
      <input placeholder="text" />
      <input placeholder="Nome" />
      <input placeholder="Idade" />
      <input placeholder="Candidatura" />
      <input placeholder="Profissao" />
      <input placeholder="Paiz" />
      <button onClick={goBack}>Voltar</button>
      <button>Enviar</button>
    </div>
  );
};
