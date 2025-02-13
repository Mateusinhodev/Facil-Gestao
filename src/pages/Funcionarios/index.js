import React from "react";
// import { Link } from "react-router-dom";

import AdicionarFuncionario from "../../components/Add Funcionario";
import "./funcionarios.css"

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { Users, Wallet, Search } from "lucide-react"; // Biblioteca de ícones



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
                        <th scope='col'>Salário</th>
                        <th scope='col'>Data de admissão</th>
                        <th scope='col'>Ações</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                            <img
                                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                alt=''
                                style={{ width: '45px', height: '45px' }}
                                className='rounded-circle'
                            />
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>John Doe</p>
                                <p className='text-muted mb-0'>john.doe@gmail.com</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>Software engineer</p>
                            <p className='text-muted mb-0'>IT department</p>
                        </td>
                        <td>
                            <MDBBadge color='success' pill>
                            Active
                            </MDBBadge>
                        </td>
                        <td>Senior</td>
                        <td>
                            <MDBBtn color='link' rounded size='sm'>
                                Editar
                            </MDBBtn>
                        </td>
                        </tr>   
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    );
}