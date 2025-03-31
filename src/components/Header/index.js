import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
// import userIcon from '../../assets/user.png';
import "./header.css";
import { toast } from "react-toastify";

// Componente de Logout
function Logout() {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth)
            .then(() => navigate("/login"))
            .catch((error) => toast.error("Erro ao deslogar:", error));
    };

    return (
        <div className="user-logado">
            {/* <img className="icone-user" src={userIcon} alt="Usuário" /> */}
            <button onClick={handleLogout} className="logout-button">Sair</button>
        </div>
    );
}

// Componente de Menu
function Menu() {
    return (
        <ul className="menu">
            <li className="item-menu"><a href="/funcionarios" className="link-reset">Funcionários</a></li>
            <li className="item-menu"><a href="/projetos" className="link-reset">Projetos</a></li>
            <li className="item-menu"><a href="/relatorios" className="link-reset">Relatórios</a></li>
            <li className="item-menu"><a href="/financas" className="link-reset">Finanças</a></li>
        </ul>
    );
}

// Componente Principal: Header
export default function Header() {
    return (
        <header>
            <div className="logo">
                <img className="logo-img" src="https://i.im.ge/2025/03/31/p6ca26.logo-facilgestao.png" alt='Logo da Fácil Gestão'/>
                <h1 className="logo-titulo">FácilGestão</h1>
            </div>
            <Menu />
            <Logout/> {/* Renderiza o botão de logout */}
            <hr/>
        </header>
    );
}
