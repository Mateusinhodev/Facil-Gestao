import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Funcionarios from "./pages/Funcionarios";
import Login from "./pages/Login";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Funcionarios/>} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;