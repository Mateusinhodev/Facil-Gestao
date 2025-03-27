import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { TrashIcon } from 'lucide-react';

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
          <Modal.Title id="contained-modal-title-vcenter" className="d-flex align-items-center gap-2">
              <TrashIcon style={{ width: '24px', height: '24px' }} /> Editar Funcionário
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