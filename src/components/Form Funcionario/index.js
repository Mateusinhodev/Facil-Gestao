import './style.css'

import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow, MDBRadio,} from "mdb-react-ui-kit";
import UploadAvatar from "../Upload Avatar";

import { PatternFormat } from 'react-number-format';

export default function FormFuncionario({formDados, atualizarDadosForm}) {

    const capturandoDados = (e) => {
        const {name, value} = e.target;
        atualizarDadosForm({ [name]: value });
    };
    
        return(
            <form className="form-container">
                <MDBContainer className="py-4">
                    <MDBRow>
                        <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                            
                            {/* Passando a função atualizarImagem para UploadAvatar */}
                            <UploadAvatar atualizarDadosForm={atualizarDadosForm} avatarUrl={formDados.avatarUrl}/> {/* Componente para adicionar imagem de perfil */}

                            <MDBRow className="mb-4">
                                <MDBCol>
                                <MDBInput label="Nome" id="form1" type="text" name="nome" value={formDados.nome} onChange={capturandoDados}/>
                                </MDBCol>

                                <MDBCol>
                                <MDBInput label="Sobrenome" id="form2" type="text" name="sobrenome" value={formDados.sobrenome} onChange={capturandoDados}/>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="mb-4">
                                <MDBCol>
                                    <PatternFormat
                                    label="CPF"
                                    value={formDados.cpf}
                                    onChange={capturandoDados}
                                    name="cpf"
                                    format="###.###.###-##"
                                    mask="_"
                                    customInput={MDBInput}
                                    placeholder="999.999.999-99"
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <PatternFormat
                                    label="Telefone"
                                    value={formDados.telefone}
                                    onChange={capturandoDados}
                                    name="telefone"
                                    format="(##) #####-####"
                                    mask="_"
                                    customInput={MDBInput}
                                    placeholder="(99) 99999-9999"
                                    />
                                </MDBCol>
                            </MDBRow>

                            


                            <MDBInput wrapperClass="mb-4" label="Endereço" id="form5" type="text" name="endereco" value={formDados.endereco} onChange={capturandoDados}/>

                            <MDBInput wrapperClass="mb-4" label="Email" id="form6" type="email" name="email" value={formDados.email} onChange={capturandoDados}/>


                            <MDBCol md='6' className='mb-4'>
                                <label className="fw-bold">Gênero </label>
                                <br/>
                                <MDBRadio name='genero' id='inlineRadio1' value='Feminino' label='Feminino' inline onChange={capturandoDados}/>
                                <MDBRadio name='genero' id='inlineRadio2' value='Masculino' label='Masculino' inline onChange={capturandoDados}/>
                                <MDBRadio name='genero' id='inlineRadio3' value='Outro' label='Outro' inline onChange={capturandoDados}/>
                            </MDBCol>

                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBInput label="Cargo" id="form7" type="text" wrapperClass="mb-4" name="cargo" value={formDados.cargo} onChange={capturandoDados}/>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBInput label="Salário" id="form8" type="text" wrapperClass="mb-4" name="salario" value={formDados.salario} onChange={capturandoDados}/>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBInput label="Data de Contratação" id="form9" type="date" wrapperClass="mb-4" name="datadecontratacao" value={formDados.datadecontratacao} onChange={capturandoDados}/>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBInput label="Data de Expiração" id="form10" type="date" wrapperClass="mb-4" name="datadeexpiracao" value={formDados.datadeexpiracao} onChange={capturandoDados}/>
                                </MDBCol>
                            </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
        );
}