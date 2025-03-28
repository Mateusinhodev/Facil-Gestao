import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css"

import { MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { Users, Wallet } from "lucide-react"; // Biblioteca de ícones
import { doc, collection, getDocs, deleteDoc, updateDoc, query, where, onSnapshot} from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Importa o Firebase Authentication


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

    const [loading, setLoading] = useState(true); // Adicionando um estado de loading
    const [error, setError] = useState(null); // Para capturar erros

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

    useEffect(() => {
        let isMounted = true;
        let unsubscribe = null;

        const fetchData = async () => {
            unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    console.warn("Nenhum usuário autenticado.");
                    if (isMounted) {
                        setError("Usuário não autenticado!");
                        setFuncionarios([]);
                        setLoading(false);
                    }
                    return;
                }

                console.log("Usuário autenticado:", user.uid);

                const funcionariosRef = collection(db, "funcionarios");
                const q = query(funcionariosRef, where("empresaId", "==", user.uid));

                // Criando um listener em tempo real
                unsubscribe = onSnapshot(q, (snapshot) => {
                    if (snapshot.empty) {
                        console.warn("Nenhum funcionário encontrado para este usuário.");
                        if (isMounted) {
                            setFuncionarios([]);
                            setLoading(false);
                        }
                        return;
                    }

                    let lista = [];
                    snapshot.forEach((doc) => {
                        const data = doc.data();
                        console.log("Funcionário atualizado:", data);

                        const dataContratacao = data.datadecontratacao ? new Date(data.datadecontratacao) : null;
                        const dataExpiracao = data.datadeexpiracao ? new Date(data.datadeexpiracao) : null;

                        const diffDays = dataContratacao && dataExpiracao
                            ? Math.ceil((dataExpiracao.getTime() - dataContratacao.getTime()) / (1000 * 60 * 60 * 24))
                            : 0;

                        lista.push({
                            id: doc.id,
                            nome: data.nome,
                            sobrenome: data.sobrenome,
                            cargo: data.cargo,
                            salario: data.salario,
                            genero: data.genero,
                            endereco: data.endereco,
                            email: data.email,
                            diasvingente: diffDays,
                            datadeexpiracao: dataExpiracao,
                            datadecontratacao: dataContratacao,
                            avatarUrl: data.avatarUrl,
                            telefone: data.telefone,
                            cpf: data.cpf,
                        });
                    });

                    if (isMounted) {
                        setFuncionarios(lista);
                        setLoading(false);
                    }
                }, (error) => {
                    console.error("Erro ao listar funcionários:", error);
                    if (isMounted) {
                        setError("Erro ao listar funcionários!");
                        setLoading(false);
                    }
                });
            });
        };

        fetchData();

        return () => {
            isMounted = false;
            if (unsubscribe) unsubscribe();
        };
    }, []);


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

    if (loading) {
        return <div>Carregando...</div>; // Exibe enquanto está carregando
    }

    if (error) {
        return <div>{error}</div>; // Exibe um erro caso ocorra
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
                <MDBTable align='middle' className="mt-3 m-3 rounded-3">
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Cargo</th>
                        <th scope='col' className="centered-column">Salário</th>
                        <th scope='col' className="centered-column">Data de Contratacao</th>
                        <th scope='col' className="centered-column">Data de Expiracao</th>
                        <th scope='col' className="centered-column">Dias Vingentes</th>
                        <th scope='col' className="centered-column">Ações</th>
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
                                    <td className="centered-column">
                                        <p>R$ {Number(funcionario.salario).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                                    </td>
                                    <td className="centered-column">
                                        <p>{new Date(funcionario.datadecontratacao).toLocaleDateString('pt-BR')}</p>
                                    </td>
                                    <td className="centered-column">
                                        <p>{new Date(funcionario.datadeexpiracao).toLocaleDateString('pt-BR')}</p>
                                    </td>
                                    <td className="centered-column">
                                        <p>{funcionario.diasvingente} dias</p>
                                    </td>
                                    <td className="centered-column">
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