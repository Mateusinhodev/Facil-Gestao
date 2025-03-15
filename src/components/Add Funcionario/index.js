import React from "react";
import './addfuncionario.css'

import FormFuncionario from "../Form Funcionario";
// import UploadAvatar from "../Upload Avatar";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const IconAdd = () => {
    return (
        <svg className="icon-add" xmlns="http://www.w3.org/2000/svg" x="px" y="0px" width="20" height="20" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
        </svg>
    )
}

export default function AdicionarFuncionario() {

    const [lgShow, setLgShow] = useState(false);
    const [formDados, setFormDados] = useState({
        nome: '',
        sobrenome: '',
        endereco: '',
        email: '',
        telefone: '',
        genero: '',
        cargo: '',
        salario: '',
        datadecontratacao: '',
        datadeexpiracao: '',
        diasvingente: '',
        avatarUrl: 'https://i.im.ge/2025/03/09/pFSNCz.image.png', // Adicionando avatarUrl aqui também
    });


    const atualizarDadosForm = (newDados) => {
        setFormDados(prev => ({...prev, ...newDados}));
    };

    const enviarDados = async () => {

        // Verificar se avatarUrl está presente
        if (!formDados.avatarUrl) {
            alert("Por favor, adicione uma imagem de avatar.");
            return;
        }

        console.log(formDados); // Verifique os dados antes de enviar

        try {
            await addDoc(collection(db, "funcionarios"), formDados);
            console.log("Funcionário adicionado com sucesso!", formDados);

            setFormDados({
                nome: '', sobrenome: '', endereco: '', email: '', telefone: '',
                genero: '', cargo: '', salario: '', datadecontratacao: '',
                datadeexpiracao: '', diasvingente: '', avatarUrl: ''
            })

            setLgShow(false); // Fecha o modal após o envio
        } catch (error) {
            console.log("Erro ao enviar dados: ", error);
        }
        
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
                <FormFuncionario formDados={formDados} atualizarDadosForm={atualizarDadosForm}/>
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