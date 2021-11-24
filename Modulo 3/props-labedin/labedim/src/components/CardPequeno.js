import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="small-card">
            <img src={props.icone} />
            <div className="texto-card">
                <h4>{props.texto2}</h4> <p>{props.endereco}</p>
            </div>


        </div>

    )


}
export default CardPequeno;