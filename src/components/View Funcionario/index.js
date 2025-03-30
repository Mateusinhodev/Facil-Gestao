// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';

import { ViewIcon } from 'lucide-react';

export default function VisualizarFuncionario({ show, onHide, funcionario }) {
    if (!funcionario) {
        return null; // Não renderiza o componente se funcionario for null ou undefined
    }

    // Converter datas para o formato YYYY-MM-DD
    const formatarData = (data) => {
        if (!data) return ""; // Se não houver data, retorna vazio
        const dateObj = new Date(data);
        return isNaN(dateObj) ? "" : dateObj.toISOString().split("T")[0]; // Retorna no formato correto
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="d-flex align-items-center gap-2">
                    <ViewIcon style={{ width: '24px', height: '24px' }} /> Visualizar Funcionario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MDBContainer className="py-4">
                    <MDBRow className="justify-content-center">
                        <MDBCol lg="10">
                            <MDBCard className="shadow-sm border-0 p-4">
                                <MDBCardBody>
                                    <div className="text-center mb-4">
                                        <MDBCardImage
                                            src={funcionario.avatarUrl}
                                            alt="avatar"
                                            className="rounded-circle mb-3 shadow"
                                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                            fluid
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nome</label>
                                        <input type="text" className="form-control" value={funcionario.nome} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Sobrenome</label>
                                        <input type="text" className="form-control" value={funcionario.sobrenome} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">CPF</label>
                                        <input type="text" className="form-control" value={funcionario.cpf} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Telefone</label>
                                        <input type="text" className="form-control" value={funcionario.telefone} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Endereço</label>
                                        <input type="text" className="form-control" value={funcionario.endereco} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email</label>
                                        <input type="email" className="form-control" value={funcionario.email} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Gênero</label>
                                        <input type="text" className="form-control" value={funcionario.genero} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Cargo</label>
                                        <input type="text" className="form-control" value={funcionario.cargo} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Salário</label>
                                        <input type="number" className="form-control" value={funcionario.salario} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Data de Contratação</label>
                                        <input type="date" className="form-control" value={formatarData(funcionario.datadecontratacao)} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Data de Expiração</label>
                                        <input type="date" className="form-control" value={formatarData(funcionario.datadeexpiracao)} disabled />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Dias Vigentes</label>
                                        <input type="number" className="form-control" value={funcionario.diasvingente} disabled />
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Modal.Body>
        </Modal>
    );
}
