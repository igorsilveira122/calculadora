import React from "react";
import "./Botao.css";

const Botao = ({label = "0"}) => {
    function handleClick (label) {
        alert (label)
    }

    return (
        <button
            className="Botao"
            onClick={ () => handleClick(label)}
        >
            {label}
        </button>
    );
}
 
export default Botao;