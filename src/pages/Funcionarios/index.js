import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css"

import { MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { Users, Wallet, Search } from "lucide-react"; // Biblioteca de ícones
import { doc, collection, getDocs, deleteDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import {ReactComponent as ExcluirIcon} from '../../assets/trash.svg'
import { ViewIcon } from 'lucide-react';
import { EditIcon } from 'lucide-react';
import { TrashIcon } from 'lucide-react';

// import {ReactComponent as ViewIcon} from '../../assets/view-icon.svg'

import AdicionarFuncionario from "../../components/Add Funcionario";
import EditarFuncionarios from "../../components/Editar Funcionario";
import ExcluirFuncionario from "../../components/Excluir Funcionario";
import VisualizarFuncionario from "../../components/View Funcionario";


function Cabecalho() {
    return (
        <div className="cabecalho-page"> 
            <h1 className="titulo-page">Funcionários</h1>
            <AdicionarFuncionario/>
        </div>
    );
}

function InfoCard({ Icon, title, value }) {
    return(
        <div className="info-card">
            <Icon className="info-card-icon" />
            <p>{title}</p>
            <span>{value}</span>
        </div>
    );
}

function PesquisarFuncionario({termoPesquisa, setTermoPesquisa}) {

    return(
        <div className="search-container">
            <input 
                type="text"
                className="search"
                placeholder="Pesquise aqui pelo funcionário"
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
} 

export default function Funcionarios() {

    const [funcionarios, setFuncionarios] = useState([]);

    const [modalShowVisualizar, setModalShowVisualizar] = useState(false)
    const [funcionarioParaVisualizar, setFuncionarioParaVisualizar] = useState(null)

    const [modalShowEditar, setModalShowEditar] = useState(false);
    const [funcionarioParaEditar, setFuncionarioParaEditar] = useState(null);

    const [modalShowExcluir, setModalShowExcluir] = useState(false);
    const [funcionarioParaExcluir, setFuncionarioParaExcluir] = useState(null);

    const [termoPesquisa, setTermoPesquisa] = useState("");

    const funcionariosFiltrados = funcionarios.filter((funcionario) => {
        const textoPesquisa = termoPesquisa.toLowerCase();
        return (
            funcionario.nome.toLowerCase().includes(textoPesquisa) ||
            funcionario.sobrenome.toLowerCase().includes(textoPesquisa) ||
            funcionario.cargo.toLowerCase().includes(textoPesquisa) ||
            funcionario.email.toLowerCase().includes(textoPesquisa) ||
            funcionario.endereco.toLowerCase().includes(textoPesquisa) ||
            funcionario.genero.toLowerCase().includes(textoPesquisa) ||
            funcionario.telefone.toLowerCase().includes(textoPesquisa) ||
            funcionario.cpf.toLowerCase().includes(textoPesquisa) ||
            funcionario.salario.toString().includes(textoPesquisa) ||
            new Date(funcionario.datadecontratacao).toLocaleDateString('pt-BR').includes(textoPesquisa) ||
            new Date(funcionario.datadeexpiracao).toLocaleDateString('pt-BR').includes(textoPesquisa)
        );
    });

    const folhaPagamento = funcionarios.reduce((total, funcionario) => total + Number(funcionario.salario), 0);
    
    // Função responsável por atualizar o banco e o estado local
    const atualizarFuncionario = async(funcionarioAtualizado) => {
        
        // Atualiza no Firebase
        await atualizarFuncionarioFirebase(funcionarioAtualizado);

        // Atualiza o estado local, substituindo o funcionário antigo pelo atualizado
        setFuncionarios((prev) => 
            prev.map((f) =>
                f.id === funcionarioAtualizado.id ? funcionarioAtualizado : f
            ) 
        );

    }

    const atualizarFuncionarioFirebase = async (funcionario) => {
        const funcionarioRef = doc(db, 'funcionarios', funcionario.id);
        await updateDoc(funcionarioRef, funcionario);
    }

    useEffect (() => {
        async function ListarFuncionario() {
            const funcionariosRef = collection(db, "funcionarios")
            await getDocs(funcionariosRef)
            .then((snapshot) => {
                let lista = [];
        
                snapshot.forEach((doc) => {

                    const dataContratacao = doc.data().datadecontratacao ? new Date(doc.data().datadecontratacao) : null;
                    const dataExpiracao = doc.data().datadeexpiracao ? new Date(doc.data().datadeexpiracao) : null;

                    const diffDays = (dataContratacao && dataExpiracao) 
                    ? Math.ceil((dataExpiracao - dataContratacao) / (1000 * 60 * 60 * 24)) 
                    : 0;

                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        sobrenome: doc.data().sobrenome,
                        cargo: doc.data().cargo,
                        salario: doc.data().salario,
                        genero: doc.data().genero,
                        endereco: doc.data().endereco,
                        email: doc.data().email,
                        diasvingente: diffDays,
                        datadeexpiracao: doc.data().datadeexpiracao,
                        datadecontratacao: doc.data().datadecontratacao,
                        avatarUrl: doc.data().avatarUrl,
                        telefone: doc.data().telefone,   
                        cpf: doc.data().cpf,         
                    })
                })
                
                setFuncionarios(lista);

                console.log(lista);
            })
            .catch((error) => {
                console.log("ERRO AO LISTAR FUNCIONÁRIOS", error);
            })
        }
    
        ListarFuncionario();
    }, [])

    useEffect(() => {
        async function loadFuncionarios() {
            const unsub = onSnapshot(collection(db, "funcionarios"), (snapshot) => {
                let lista = [];
        
                snapshot.forEach((doc) => {

                    const dataContratacao = doc.data().datadecontratacao ? new Date(doc.data().datadecontratacao) : null;
                    const dataExpiracao = doc.data().datadeexpiracao ? new Date(doc.data().datadeexpiracao) : null;

                    const diffDays = (dataContratacao && dataExpiracao) 
                    ? Math.ceil((dataExpiracao - dataContratacao) / (1000 * 60 * 60 * 24)) 
                    : 0;

                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        sobrenome: doc.data().sobrenome,
                        cargo: doc.data().cargo,
                        salario: doc.data().salario,
                        genero: doc.data().genero,
                        endereco: doc.data().endereco,
                        email: doc.data().email,
                        diasvingente: diffDays,
                        datadeexpiracao: doc.data().datadeexpiracao,
                        datadecontratacao: doc.data().datadecontratacao,
                        avatarUrl: doc.data().avatarUrl,
                        telefone: doc.data().telefone,   
                        cpf: doc.data().cpf,         
                    })
                })

                setFuncionarios(lista)
            })
        }
        loadFuncionarios();
    }, [])

    async function handleDelete(id) {
        try {
            await deleteDoc(doc(db, "funcionarios", id));
            // Atualizar o estado local removendo o funcionário
            setFuncionarios(funcionarios.filter(funcionario => funcionario.id !== id));
            alert("Funcionario excluído com sucesso!");
        } catch (error) {
            console.log("Erro ao excluir funcionário", error);
        }
    }

    return (
        <div className="dashboard-funcionários">
            <Cabecalho/>

            <div className="dashboard-info">
                <InfoCard Icon={Users} title="Total de Funcionários" value={funcionarios.length}/>
                <InfoCard Icon={Wallet} title="Folha de Pagamento" value={`R$ ${folhaPagamento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}/>
                <PesquisarFuncionario termoPesquisa={termoPesquisa} setTermoPesquisa={setTermoPesquisa}/>
            </div>
            
            <div className="d-flex justify-content-center" >
                <MDBTable align='middle' className="mt-3 m-5 rounded-3">
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Cargo</th>
                        <th scope='col' className="text-center">Salário</th>
                        <th scope='col' className="text-center">Data de Contratacao</th>
                        <th scope='col' className="text-center">Data de Expiracao</th>
                        <th scope='col' className="text-center">Dias Vingentes</th>
                        <th scope='col' className="text-center">Ações</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {funcionariosFiltrados.map((funcionario) => {
                            return(
                                <tr key={funcionario.id}>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                        <img
                                            src={funcionario.avatarUrl}
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{funcionario.nome} {funcionario.sobrenome}</p>
                                            <p className='text-muted mb-0'>{funcionario.email}</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>{funcionario.cargo}</p>
                                    </td>
                                    <td>
                                        <p className="text-center">R$ {Number(funcionario.salario).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                                    </td>
                                    <td>
                                        <p className="text-center">{new Date(funcionario.datadecontratacao).toLocaleDateString('pt-BR')}</p>
                                    </td>
                                    <td>
                                        <p className="text-center">{new Date(funcionario.datadeexpiracao).toLocaleDateString('pt-BR')}</p>
                                    </td>
                                    <td>
                                        <p className="text-center">{funcionario.diasvingente} dias</p>
                                    </td>
                                    <td className="text-center">
                                        <div>
                                            <button className="btn-action"
                                                onClick={() => {
                                                    setFuncionarioParaVisualizar(funcionario);
                                                    setModalShowVisualizar(true);
                                                }}>
                                                <ViewIcon/>
                                            </button>

                                            {/* BUTTON PARA EDITAR FUNCIONÁRIO */}
                                            <button className="btn-action" 
                                                onClick={() => {
                                                    setFuncionarioParaEditar(funcionario);
                                                    setModalShowEditar(true);
                                                }}>
                                                <EditIcon/>
                                            </button>

                                            {/* BUTTON PARA EXCLUIR FUNCIONÁRIO */}
                                            <button className="btn-action" 
                                                onClick={() => {
                                                    setFuncionarioParaExcluir(funcionario.id); 
                                                    setModalShowExcluir(true);
                                            }}>
                                                <TrashIcon/>
                                            </button>

                                        </div>
                                        
                                    </td>
                                </tr>   
                            )
                        }
                        )}
                    </MDBTableBody>

                    <VisualizarFuncionario show={modalShowVisualizar} onHide={() => setModalShowVisualizar(false)} funcionario={funcionarioParaVisualizar}/>
                    <EditarFuncionarios show={modalShowEditar} onHide={() => setModalShowEditar(false)} funcionario={funcionarioParaEditar} onSave={atualizarFuncionario}/>
                    <ExcluirFuncionario show={modalShowExcluir} onHide={() => setModalShowExcluir(false)} id={funcionarioParaExcluir} onDelete={handleDelete} />

                </MDBTable>
            </div>
        </div>
    );
}