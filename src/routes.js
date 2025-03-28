import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Funcionarios from "./pages/Funcionarios";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Cadastro from "./pages/Cadastrar";
import Projetos from "./pages/Projetos";
import Relatorios from "./pages/Relatorios";
import Financas from "./pages/Financas";

// Layout principal com Header (para todas as páginas, exceto Login e Cadastro)
const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Redireciona a página inicial para a tela de login */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Páginas SEM Header */}
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />

                {/* Páginas COM Header */}
                <Route
                    path="/funcionarios"
                    element={
                        <MainLayout>
                            <Funcionarios />
                        </MainLayout>
                    }
                />
                <Route
                    path="/projetos"
                    element={
                        <MainLayout>
                            <Projetos />
                        </MainLayout>
                    }
                />
                <Route
                    path="/relatorios"
                    element={
                        <MainLayout>
                            <Relatorios />
                        </MainLayout>
                    }
                />
                <Route
                    path="/financas"
                    element={
                        <MainLayout>
                            <Financas />
                        </MainLayout>
                    }
                />

                {/* Página de erro para rotas inexistentes */}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;