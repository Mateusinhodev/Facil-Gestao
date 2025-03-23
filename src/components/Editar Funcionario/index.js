import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
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
          <Modal.Title id="contained-modal-title-vcenter">
            <EditIcon/> Editar Funcionários
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <section>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                            <MDBCardImage
                            src={funcionario.avatarUrl}
                            alt="avatar"
                            className="rounded-circle"
                            style={{ width: '150px', height: '150px' }}
                            fluid
                            />
                                {/* <p className="text-muted mb-1"></p>
                                <p className="text-muted mb-4"></p> */}
                                <div className="d-flex justify-content-center mb-2">
                                {/* <MDBBtn>Follow</MDBBtn>
                                <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                                </div>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="8">
                            <MDBCard className="mb-4 border-none">
                            <MDBCardBody>
                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Nome</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{funcionario.nome}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr/>

                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Email</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{funcionario.email}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr/>

                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Telefone</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{funcionario.telefone}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr/>

                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Gênero</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{funcionario.genero}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                                <hr/>

                                <MDBRow>
                                <MDBCol sm="3">
                                    <MDBCardText>Endereco</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                    <MDBCardText className="text-muted">{funcionario.endereco}</MDBCardText>
                                </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
          
        </Modal.Body>
        <Modal.Footer>
          <Button>Salvar Alterações</Button>
        </Modal.Footer>
      </Modal>
    );
}