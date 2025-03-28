import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import logo from '../../assets/logo.png';
// import notificacao from '../../assets/notificacao.png'
// import user from '../../assets/user.png'

import userIcon from '../../assets/user.png';

import "./header.css";

function Menu() {
    return (
        <ul className="menu">
            <li className="item-menu">
                <Link to="/funcionarios" className="link-reset">Funcionários</Link>
            </li>
            <li className="item-menu">
                <Link to="/projetos" className="link-reset">Projetos</Link>
            </li>
            <li className="item-menu">
                <Link to="/relatorios" className="link-reset">Relatórios</Link>
            </li>
            <li className="item-menu">
                <Link to="/financas" className="link-reset">Finanças</Link>
            </li>
        </ul>
    );
}

function UserLogado() {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate(); // Inicialize o hook de navegação

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user.displayName || user.uid); // Exibe o nome do usuário, se disponível, caso contrário, o UID
            } else {
                setUserInfo(null); // Caso o usuário não esteja autenticado
            }
        });

        return () => unsubscribe(); // Limpeza quando o componente for desmontado
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("Usuário deslogado com sucesso");
                navigate("/login"); // Redireciona para a página de login após o logout
            })
            .catch((error) => {
                console.error("Erro ao deslogar: ", error);
            });
    };

    return (
        <div>
            <img className="icone-user" src={userIcon} alt='Icone de usuário'/>
            <p>{userInfo ? `Usuário Logado: ${userInfo}` : 'Nenhum usuário logado'}</p>
            {userInfo && (
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            )}
        </div>
    );
}

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img className="logo-img" src={logo} alt='Logo da Fácil Gestão'/>
                <h1 className="logo-titulo">FácilGestão</h1>
            </div>
            <Menu />
            <UserLogado />
            <hr/>
        </header>
    );
}
