import React from "react";
import AppRoutes from "./routes";
import "./App.css"

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <AppRoutes/>
    </div>
  );
}

export default App;
