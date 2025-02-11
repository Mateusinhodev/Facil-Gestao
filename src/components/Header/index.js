import React from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'
import notificacao from '../../assets/notificacao.png'
import user from '../../assets/user.png'

import "./header.css"

function Menu() {
    return (
        <ul className="menu">
           <li className="item-menu">
                <Link to="/funcionarios" className="link-reset">Funcionários</Link>
            </li>
            <li className="item-menu">
                <Link to="/erro" className="link-reset">Projetos</Link>
            </li>
            <li className="item-menu">
                <Link to="/erro" className="link-reset">Relatórios</Link>
            </li>
            <li className="item-menu">
                <Link to="/erro" className="link-reset">Finanças</Link>
            </li>
        </ul> 
    )
}

function Icones() {
    return(
        <div className="icones">
            <img className="icone-notifica" src={notificacao} alt='Icone de notificação'/>
            <img className="icone-user" src={user} alt='Icone de usuário'/>
        </div>
    )
}

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img className="logo-img" src={logo} alt='Logo da Fácil Gestão'/>
                <h1 className="logo-titulo">FácilGestão</h1>
            </div>
            <Menu/>
            <Icones/>
            <hr/>
            
        </header>
    );
}