import React from "react";
import Botao from "../Botao/Botao";
import "./Botoes.css";

const Botoes = () => {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operacoes = ["÷", "×", "-", "+", "=", "Del"];

    return (
        <div className="Botoes">
            

            <div className="Botoes-numeros">
                {
                    numeros.map((botao) => (
                        <Botao label={botao}/>
                    ))
                }

            </div>
            
            <div className="Botoes-operacoes">
                {
                    operacoes.map((operacao) => (
                        <Botao label={operacao}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Botoes;