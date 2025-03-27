import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import Logo from "../../assets/logo.png"

export default function Cadastro() {

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>

        {/* Seção de Cadastro */}
        <MDBCol md="6" className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img 
                src={Logo}
                style={{ width: '185px' }} 
                alt="Lotus Team Logo" 
              />
              <h4 className="mt-1 mb-5 pb-1">Crie sua conta no Fácil Gestão</h4>
            </div>

            <p>Preencha os campos abaixo para se cadastrar</p>

            <MDBInput wrapperClass="mb-4" label="Nome da Empresa" id="form1" type="text" aria-label="Nome da Empresa"/>
            <MDBInput wrapperClass="mb-4" label="Email" id="form2" type="email" aria-label="Email"/>
            <MDBInput wrapperClass="mb-4" label="Senha" id="form3" type="password" aria-label="Senha"/>
            <MDBInput wrapperClass="mb-4" label="Confirme sua Senha" id="form4" type="password" aria-label="Confirme sua Senha"/>

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Cadastrar</MDBBtn>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Já tem uma conta?</p>
              <a outline className="mx-2" color="primary" href="/login">
                Faça login
              </a>
            </div>

          </div>
        </MDBCol>

        {/* Seção Informativa */}
        <MDBCol md="6" className="mb-5 d-flex align-items-center" style={{ minHeight: '100vh' }}>
          <div className="d-flex flex-column justify-content-center w-100 h-100 p-4"
               style={{ backgroundColor: '#0E97FA', color: 'white', borderRadius: '10px' }}>
            <div className="px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Comece agora com o Fácil Gestão</h4>
              <p className="small mb-0">
                O Fácil Gestão é a solução ideal para empresas que buscam eficiência e organização no controle de funcionários. Cadastre-se agora e descubra como podemos ajudar a otimizar a administração do seu negócio.
              </p>
            </div>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}