import React from "react";
import './addfuncionario.css'

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

const Form = () => {

    const [form, setForm] = useState({
        nome: '',
        cargo: '',
        salario: '',
        dataDeContratacao: '',
        periodoDeContrato: ''
    });

    const dadosForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    return(
        <div className="form-container">
            <label>Nome:
                <input type='text' name='nome' value={form.nome} onChange={dadosForm}/>
            </label>

            <label>Cargo:
                <input type='text' name='cargo' value={form.cargo} onChange={dadosForm}/>
            </label>

            <label>Salario:
                <input type='number' name='salario' value={form.salario} onChange={dadosForm}/>
            </label>

            <label> Data de Contratação:
                <input type="date" name='dataDeContratacao' value={form.dataDeContratacao} onChange={dadosForm}/>
            </label>

            <label>Periodo de Contrato (meses):
                <input type='number' name='periodoDeContrato' value={form.periodoDeContrato} onChange={dadosForm}/> 
            </label>
        </div>
    );
}

export default function AdicionarFuncionario() {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

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
                <Form/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleShow}>
                    Adicionar Funcionário
                </Button>
            </Modal.Footer> 
            </Modal>
        </>
        
    );
}