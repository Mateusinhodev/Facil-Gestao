// import React, { useEffect } from 'react';
import './style.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebaseConfig";

import { useState } from 'react';

import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

import { toast } from 'react-toastify';

export default function Login() {
  // Estados para armazenar o email e a senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Hook do react-router-dom para redirecionamento
  const navigate = useNavigate();

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      // alert("Logado com sucesso");
      toast.success("Login realizado com sucesso!")
      // Redireciona para a página de Funcionários
      navigate('/funcionarios'); 

      setEmail('');
      setSenha('');
    })
    .catch((error) => {
      // alert("Erro ao Logar");
      toast.error("Erro ao fazer login!")
    })
  }

  // useEffect(() => {
  //   async function checkLogin() {
  //     onAuthStateChanged(auth, (user) => {
  //       if(user) {
  //           // se tem um usuário logado ele entra aqui...
  //       } else {
  //           // não possui nenhum user logado
  //           setUserId(false);
  //       }
  //     })
  //   }

  //   checkLogin()
  // }, [])

  return (
    <MDBContainer fluid className="gradient-form d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <MDBRow className="w-100 h-100 d-flex align-items-center">

        {/* Seção de Login */}
        <MDBCol md="6" className="d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column w-75">

            <div className="text-center">
              <img 
                src="https://i.im.ge/2025/03/31/p6ca26.logo-facilgestao.png"
                style={{ width: '185px' }} 
                alt="Lotus Team Logo" 
              />
              <h4 className="mt-1 mb-5 pb-1">Nós somos a equipe Fácil Gestão</h4>
            </div>

            <p>Por favor, faça login na sua conta</p>

            <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass="mb-4" label="Senha" id="form2" type="password" aria-label="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

            <div className="text-center pt-1 mb-5 pb-1">
              <button className="button-entrar" onClick={logarUsuario}>Entrar</button>
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
        <MDBCol md="6" className="d-flex align-items-center justify-content-center"
                style={{ height: '100vh', backgroundColor: '#0E97FA', color: 'white', borderRadius: '10px' }}>
          <div className="px-3 py-4 p-md-5 mx-md-4 text-center">
            <h3 className="mb-4">Facilidade e eficiência na gestão empresarial</h3>
            <p className="small mb-0">
              O Fácil Gestão é a solução ideal para empresas que buscam eficiência e organização no controle de funcionários. Com uma interface intuitiva e funcionalidades completas, ele permite gerenciar a folha de pagamento, listar colaboradores, acompanhar a quantidade de funcionários e muito mais. Simplifique a administração do seu negócio e tenha mais tempo para focar no que realmente importa: o crescimento da sua empresa.
            </p>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}