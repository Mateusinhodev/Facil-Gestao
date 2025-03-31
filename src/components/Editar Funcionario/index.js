import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';

import { EditIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


export default function EditarFuncionarios({show, onHide, funcionario, onSave}) {

    const [formData, setFormData] = useState({...funcionario});

    useEffect(() => {
        if (funcionario) {
            setFormData({
                ...funcionario,
                datadecontratacao: funcionario.datadecontratacao
                    ? new Date(funcionario.datadecontratacao).toISOString().split("T")[0] // Converte para formato correto
                    : new Date().toISOString().split("T")[0], // Se for nulo, usa a data atual
    
                datadeexpiracao: funcionario.datadeexpiracao
                    ? new Date(funcionario.datadeexpiracao).toISOString().split("T")[0]
                    : "" // Se não existir, mantém vazio
            });
        }
    }, [funcionario]);

    // Função para capturar os novos valores digitados
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value, // Atualiza o campo correto dinamicamente
        });
    };

    const handleSave = () => {
        onSave(formData); // Aqui chama a função do pai, passando os dados atualizados
        toast.success("Funcionário editado com sucesso!");
        onHide(); // Fecha o modal
    }

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
                                {/* <div className="text-center mb-4">
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
                                </div> */}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nome"
                                        value={formData.nome} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Sobrenome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="sobrenome"
                                        value={formData.sobrenome} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">CPF</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cpf"
                                        value={formData.cpf} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Telefone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="telefone"
                                        value={formData.telefone} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Endereço</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="endereco"
                                        value={formData.endereco} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Gênero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="genero"
                                        value={formData.genero} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Cargo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cargo"
                                        value={formData.cargo} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Salário</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="salario"
                                        value={formData.salario} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Data de Contratação</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="datadecontratacao"
                                        value={formData.datadecontratacao} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Data de Expiração</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="datadeexpiracao"
                                        value={formData.datadeexpiracao} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                {/* <div className="mb-3">
                                    <label className="form-label fw-bold">Dias Vigentes</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="diasvingentes"
                                        value={formData.diasvingente} 
                                        onChange={handleChange} 
                                    />
                                </div> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSave}>Salvar Alterações</Button>
        </Modal.Footer>
      </Modal>
    );
}