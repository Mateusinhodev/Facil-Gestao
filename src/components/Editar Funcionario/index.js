import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';

import {ReactComponent as EditIcon} from '../../assets/pencil-square.svg'


export default function EditarFuncionarios({show, onHide, funcionario}) {

    if (!funcionario) {
        return null;  // Não renderiza o componente se funcionario for null ou undefined
    }

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
                <EditIcon style={{ width: '24px', height: '24px' }} /> Editar Funcionário
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
                                    <div>
                                        <Button variant="outline-primary" size="sm">Alterar Foto</Button>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.nome}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Sobrenome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.sobrenome}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">CPF</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.cpf}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Telefone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.telefone}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Endereço</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.endereco}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        defaultValue={funcionario.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Gênero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.genero}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Cargo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={funcionario.cargo}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Salário</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        defaultValue={funcionario.salario}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Data de Contratação</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        defaultValue={funcionario.datadecontratacao}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Data de Expiração</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        defaultValue={funcionario.datadeexpiracao}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Dias Vigentes</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        defaultValue={funcionario.diasvingente}
                                    />
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button>Salvar Alterações</Button>
        </Modal.Footer>
      </Modal>
    );
}