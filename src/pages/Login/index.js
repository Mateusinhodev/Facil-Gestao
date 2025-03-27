import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import Logo from "../../assets/logo.png"

export default function Login() {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>

        {/* Seção de Login */}
        <MDBCol md="6" className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img 
                src={Logo}
                style={{ width: '185px' }} 
                alt="Lotus Team Logo" 
              />
              <h4 className="mt-1 mb-5 pb-1">Nós somos a equipe Fácil Gestão</h4>
            </div>

            <p>Por favor, faça login na sua conta</p>

            <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" aria-label="Email"/>
            <MDBInput wrapperClass="mb-4" label="Senha" id="form2" type="password" aria-label="Senha"/>

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Entrar</MDBBtn>
              <a className="text-muted" href="#!">Esqueceu sua senha?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Não tem uma conta para sua empresa?</p>
              <a outline className="mx-2" color="primary" href="/cadastro">
                Cadastre-se
              </a>
            </div>

          </div>
        </MDBCol>

        {/* Seção Informativa */}
        <MDBCol md="6" className="mb-5 d-flex align-items-center" style={{ minHeight: '100vh' }}>
          <div className="d-flex flex-column justify-content-center w-100 h-100 p-4"
               style={{ backgroundColor: '#0E97FA', color: 'white', borderRadius: '10px' }}>
            <div className="px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Facilidade e eficiência na gestão empresarial</h4>
              <p className="small mb-0">
              O Fácil Gestão é a solução ideal para empresas que buscam eficiência e organização no controle de funcionários. Com uma interface intuitiva e funcionalidades completas, ele permite gerenciar a folha de pagamento, listar colaboradores, acompanhar a quantidade de funcionários e muito mais. Simplifique a administração do seu negócio e tenha mais tempo para focar no que realmente importa: o crescimento da sua empresa.
              </p>
            </div>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

