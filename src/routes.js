import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Funcionarios from "./pages/Funcionarios";
import Login from "./pages/Login";
import Error from "./pages/Error";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/funcionarios" element={<Funcionarios/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/erro" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;