import React, { useState } from "react";
import { useEffect } from "react";

import AdicionarFuncionario from "../../components/Add Funcionario";
import EditarFuncionarios from "../../components/Editar Funcionario";
import "./style.css"

import { MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { Users, Wallet, Search } from "lucide-react"; // Biblioteca de ícones
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import {ReactComponent as EditIcon} from '../../assets/pencil-square.svg'
import {ReactComponent as ExcluirIcon} from '../../assets/trash.svg'
import ExcluirFuncionario from "../../components/Excluir Funcionario";


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

function PesquisarFuncionario() {
    return(
        <div className="search-container">
            <input 
                type="text"
                className="search"
                placeholder="Pesquise aqui pelo funcionário"
            />

            <button className="search-button"><Search/></button>

        </div>
    );
} 

export default function Funcionarios() {

    const [funcionarios, setFuncionarios] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const [modalShowExcluir, setModalShowExcluir] = React.useState(false);
    const [funcionarioParaExcluir, setFuncionarioParaExcluir] = useState(null);


    useEffect (() => {
        async function ListarFuncionario() {
            const funcionariosRef = collection(db, "funcionarios")
            await getDocs(funcionariosRef)
            .then((snapshot) => {
                let lista = [];
        
                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        sobrenome: doc.data().sobrenome,
                        cargo: doc.data().cargo,
                        salario: doc.data().salario,
                        genero: doc.data().genero,
                        endereco: doc.data().endereco,
                        email: doc.data().email,
                        diasvingente: doc.data().diasvingente,
                        datadeexpiracao: doc.data().datadeexpiracao,
                        datadecontratacao: doc.data().datadecontratacao,
                        avatarUrl: doc.data().avatarUrl            
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
                <InfoCard Icon={Users} title="Total de Funcionários" value="XX"/>
                <InfoCard Icon={Wallet} title="Folha de Pagamento" value="R$ 100.000,00"/>
                <PesquisarFuncionario/>
            </div>
            
            <div className="d-flex justify-content-center" >
                <MDBTable align='middle' className="mt-3 m-5 rounded-3">
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Cargo</th>
                        <th scope='col' className="text-center">Salário</th>
                        <th scope='col' className="text-center">Data de admissão</th>
                        <th scope='col' className="text-center">Ações</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {funcionarios.map((funcionario) => {
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
                                        <p className="text-center">{new Date(funcionario.datadeexpiracao).toLocaleDateString('pt-BR')}</p>
                                    </td>
                                    <td className="text-center">
                                        <div>
                                            <button className="btn-editar" onClick={() => setModalShow(true)}>
                                                <EditIcon/>
                                            </button>

                                            <EditarFuncionarios show={modalShow} onHide={() => setModalShow(false)}/>

                                            <button className="btn-editar" 
                                                onClick={() => {
                                                    setFuncionarioParaExcluir(funcionario.id); 
                                                    setModalShowExcluir(true)
                                            }}>
                                                <ExcluirIcon/>
                                            </button>

                                            {/* Passando o ID e a função onDelete via props */}
                                            <ExcluirFuncionario show={modalShowExcluir} onHide={() => setModalShowExcluir(false)} id={funcionarioParaExcluir} onDelete={handleDelete}/>
                                        </div>
                                        
                                    </td>
                                </tr>   
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    );
}