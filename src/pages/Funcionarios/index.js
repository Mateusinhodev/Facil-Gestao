import React from "react";
import { Link } from "react-router-dom";

import AdicionarFuncionario from "../../components/Add Funcionario";
import "./funcionarios.css"
export default function Funcionarios() {
    return (
        <div className="cabecalho-page"> 
            <h1 className="titulo-page">Funcionários</h1>
            <AdicionarFuncionario/>
        </div>
    );
}