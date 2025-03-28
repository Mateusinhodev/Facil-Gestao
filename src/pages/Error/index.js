import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! Página não encontrada.</p>
            <Link to="/" style={styles.button}>Voltar para a Página Inicial</Link>
        </div>
    );
};

// Estilos inline para a página
const styles = {
    container: {
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "80px",
        fontWeight: "bold",
        color: "#ff4444",
        margin: "0",
    },
    message: {
        fontSize: "20px",
        color: "#555",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "18px",
        color: "#fff",
        backgroundColor: "#007bff",
        textDecoration: "none",
        borderRadius: "5px",
    },
};

export default Error404;