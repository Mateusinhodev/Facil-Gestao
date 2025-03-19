import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ExcluirFuncionario ({show, onHide, id, onDelete}) {
  const handleExcluir = () => {
      if (onDelete && id) {
          onDelete(id); // chama a função passada via props com o ID
          onHide();     // fecha o modal
      }
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
          <Modal.Title id="contained-modal-title-vcenter">
            Excluir Funcionario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Deseja realmente excluir este funcionário?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleExcluir}>Excluir</Button>
        </Modal.Footer>
      </Modal>
  );
}