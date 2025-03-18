import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ExcluirFuncionario (props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Excluir Funcionario
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Deseja realmente excluir funcionário?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button>Cancelar</Button>
            <Button>Excluir</Button>
          </Modal.Footer>
        </Modal>
      );
}