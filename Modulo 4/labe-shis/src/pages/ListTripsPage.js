import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const ListTripsPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  return (
    <div>
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
        Lista de Viagens
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrevar-se</button>
      </p>
    </div>
  );
};
