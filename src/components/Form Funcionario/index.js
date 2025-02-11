import React from "react";

import './style.css'

import {
    MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow, MDBRadio,
  } from "mdb-react-ui-kit";

export default function FormFuncionario() {
    
        return(
            <form className="form-container">
                <MDBContainer className="py-4">
                    <MDBRow>
                        <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                            <MDBRow className="mb-4">
                                <MDBCol>
                                <MDBInput label="Nome" id="form1" type="text" />
                                </MDBCol>

                                <MDBCol>
                                <MDBInput label="Sobrenome" id="form2" type="text" />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput
                                wrapperClass="mb-4"
                                label="Endereço"
                                id="form3"
                                type="text"
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Email"
                                id="form4"
                                type="email"
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Telefone"
                                id="form5"
                                type="number"
                            />

                            <MDBCol md='6' className='mb-4'>
                                <label className="fw-bold">Gênero </label>
                                <br/>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Feminino' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Masculino' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Outro' inline />
                            </MDBCol>

                            <MDBRow>
                                <MDBCol md="4">
                                <MDBInput
                                    label="Cargo"
                                    id="form8"
                                    type="text"
                                    wrapperClass="mb-4"
                                />
                                </MDBCol>
                                <MDBCol md="4">
                                <MDBInput
                                    label="Salário"
                                    id="form6"
                                    type="text"
                                    wrapperClass="mb-4"
                                />
                                </MDBCol>
                                <MDBCol md="4">
                                <MDBInput
                                    label="Data de Contratação"
                                    id="form7"
                                    type="date"
                                    wrapperClass="mb-4"
                                />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="3">
                                <MDBInput
                                    label="Data de Expiração"
                                    id="form8"
                                    type="date"
                                    wrapperClass="mb-4"
                                />
                                </MDBCol>
                                <MDBCol md="3">
                                <MDBInput
                                    label="Dias Vingente"
                                    id="form8"
                                    type="number"
                                    wrapperClass="mb-4"
                                />
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