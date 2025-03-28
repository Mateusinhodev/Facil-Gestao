import React from "react";
import './addfuncionario.css'

import FormFuncionario from "../Form Funcionario";
// import UploadAvatar from "../Upload Avatar";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importação do Firebase Auth


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
        cpf: '',
    });


    const atualizarDadosForm = (newDados) => {
        setFormDados(prev => ({...prev, ...newDados}));
    };

    const enviarDados = async (event) => {
        event.preventDefault(); // Evita o recarregamento da página
    
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (!user) {
            alert("Usuário não autenticado! Faça login novamente.");
            return;
        }
    
        // if (!formDados.avatarUrl) {
        //     alert("Por favor, adicione uma imagem de avatar.");
        //     return;
        // }
    
        const funcionarioComEmpresaId = { ...formDados, empresaId: user.uid };
    
        try {
            await addDoc(collection(db, "funcionarios"), funcionarioComEmpresaId);
            alert("Funcionário adicionado com sucesso!");
    
            setFormDados({
                nome: '', sobrenome: '', endereco: '', email: '', telefone: '',
                genero: '', cargo: '', salario: '', datadecontratacao: '',
                datadeexpiracao: '', diasvingente: '', avatarUrl: '', cpf: ''
            });
    
            setLgShow(false);
        } catch (error) {
            console.log("Erro ao enviar dados: ", error);
        }
    };

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