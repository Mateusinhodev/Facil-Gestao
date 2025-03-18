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


export default function EditarFuncionarios(props) {
    return (
      <Modal
        {...props}
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
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle"
                            style={{ width: '150px' }}
                            fluid />
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                            <div className="d-flex justify-content-center mb-2">
                            {/* <MDBBtn>Follow</MDBBtn>
                            <MDBBtn outline className="ms-1">Message</MDBBtn> */}
                            </div>
                        </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Nome</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                            </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">example@example.com</MDBCardText>
                            </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Telefone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                            </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Gênero</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                            </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Endereco</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
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
            <Button>Cancelar</Button>
          <Button>Salvar Alterações</Button>
        </Modal.Footer>
      </Modal>
    );
}