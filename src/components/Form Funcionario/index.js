import React from "react";

import './style.css'

import {
    MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow, MDBRadio,
  } from "mdb-react-ui-kit";

export default function FormFuncionario({formDados, onMudancaFormulario}) {

    const capturandoDados = (e) => {
        const {name, value} = e.target;
        onMudancaFormulario({
            ...formDados,
            [name]: value,
        });
    };
    
        return(
            <form className="form-container">
                <MDBContainer className="py-4">
                    <MDBRow>
                        <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                            <MDBRow className="mb-4">
                                <MDBCol>
                                <MDBInput label="Nome" id="form1" type="text" name="nome" value={formDados.nome} onChange={capturandoDados}/>
                                </MDBCol>

                                <MDBCol>
                                <MDBInput label="Sobrenome" id="form2" type="text" name="sobrenome" value={formDados.sobrenome} onChange={capturandoDados}/>
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass="mb-4" label="Endereço" id="form3" type="text" name="endereco" value={formDados.endereco} onChange={capturandoDados}/>

                            <MDBInput wrapperClass="mb-4" label="Email" id="form4" type="email" name="email" value={formDados.email} onChange={capturandoDados}/>

                            <MDBInput wrapperClass="mb-4" label="Telefone" id="form5" type="number" name="telefone" value={formDados.telefone} onChange={capturandoDados}/>

                            <MDBCol md='6' className='mb-4'>
                                <label className="fw-bold">Gênero </label>
                                <br/>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Feminino' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Masculino' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Outro' inline />
                            </MDBCol>

                            <MDBRow>
                                <MDBCol md="4">
                                    <MDBInput label="Cargo" id="form8" type="text" wrapperClass="mb-4" name="cargo" value={formDados.cargo} onChange={capturandoDados}/>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBInput label="Salário" id="form6" type="text" wrapperClass="mb-4" name="salario" value={formDados.salario} onChange={capturandoDados}/>
                                </MDBCol>

                                <MDBCol md="4">
                                    <MDBInput label="Data de Contratação" id="form7" type="date" wrapperClass="mb-4" name="datadecontratacao" value={formDados.datadecontratacao} onChange={capturandoDados}/>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="3">
                                    <MDBInput label="Data de Expiração" id="form8" type="date" wrapperClass="mb-4" name="datadeexpiracao" value={formDados.datadeexpiracao} onChange={capturandoDados}/>
                                </MDBCol>
                                <MDBCol md="3">
                                    <MDBInput label="Dias Vingente" id="form8" type="number" wrapperClass="mb-4" name="diasvingente" value={formDados.diasvingente} onChange={capturandoDados}/>
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