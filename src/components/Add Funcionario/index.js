import React from "react";
import './addfuncionario.css'
import FormFuncionario from "../Form Funcionario";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const IconAdd = () => {
    return (
        <svg className="icon-add" xmlns="http://www.w3.org/2000/svg" x="px" y="0px" width="20" height="20" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
        </svg>
    )
}

export default function AdicionarFuncionario() {

    const [lgShow, setLgShow] = useState(false);
    const [formDados, setFormDados] = useState({
        nome: ""
        // Aqui vem outros dados
    });

    const atualizarDadosForm = (newDados) => {
        setFormDados(newDados);
    };

    const enviarDados = () => {
        console.log("Dados enviado: ", formDados);
        setLgShow(false); // Fecha o modal após o envio
    }

    return (
        <>
            <Button className="btn-add" onClick={() => setLgShow(true)}> <IconAdd/> Adicionar funcionario</Button>
        
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             <IconAdd/> Adicionar Funcionário
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormFuncionario formDados={formDados} onMudancaFormulario={atualizarDadosForm}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={enviarDados}>
                    Adicionar Funcionário
                </Button>
            </Modal.Footer> 
            </Modal>
        </>
        
    );
}