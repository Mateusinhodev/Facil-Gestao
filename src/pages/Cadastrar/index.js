import React, { useState } from 'react';
import "./style.css"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from "../../firebaseConfig";
import { doc, setDoc } from 'firebase/firestore'; // Importe as funções do Firestore

// import UploadAvatar from "../../components/Upload Avatar";

import Logo from "../../assets/logo.png";

export default function Cadastro() {

  const [nomeEmpresa, setNomeEmpresa] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  // const [logoUrl, setLogoUrl] = useState('')

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(async (userCredential) => {
      // Obtenha o UID do usuário criado
      const user = userCredential.user;

      // Salve o nome da empresa no Firestore
      await setDoc(doc(db, 'empresas', user.uid), {
        nomeEmpresa: nomeEmpresa,
        email: email,
        // logoUrl: logoUrl,
      });

      alert("Cadastrado com sucesso!")
      setEmail('')
      setSenha('')
      setNomeEmpresa('');
      // setLogoUrl('');
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password')  {
        alert("Senha muito fraca!")
      } else if(error.code === 'auth/email-already-in-use') {
        alert("Email já existe!")
      }
      
    })
  }

  return (
    <MDBContainer fluid className="gradient-form d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <MDBRow className="w-100">

        {/* Seção de Cadastro */}
        <MDBCol md="6" className="d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column ms-5 w-75">
            <div className="text-center">
              <img 
                src={Logo}
                style={{ width: '185px' }} 
                alt="Lotus Team Logo" 
              />
              <h4 className="mt-1 mb-5 pb-1">Crie sua conta no Fácil Gestão</h4>
            </div>

            <p>Preencha os campos abaixo para se cadastrar</p>
            {/* <UploadAvatar type="file" setImageUrl={setLogoUrl} imageUrl={logoUrl} label="Logo da Empresa"/> */}
            <MDBInput wrapperClass="mb-4" label="Nome da Empresa" id="form1" type="text" aria-label="Nome da Empresa" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)}/>
            <MDBInput wrapperClass="mb-4" label="Email" id="form2" type="email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <MDBInput wrapperClass="mb-4" label="Senha" id="form3" type="password" aria-label="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            {/* <MDBInput wrapperClass="mb-4" label="Confirme sua Senha" id="form4" type="password" aria-label="Confirme sua Senha"/> */}

            <div className="text-center pt-1 mb-5 pb-1">
              <button className='button-cadastrar' onClick={novoUsuario}>Cadastrar</button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4">
              <p className="mb-0">Já tem uma conta?</p>
              <a className="mx-2" href="/login">
                Faça login
              </a>
            </div>
          </div>
        </MDBCol>

        {/* Seção Informativa */}
        <MDBCol md="6" className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="d-flex flex-column justify-content-center w-100 h-100 p-4"
               style={{ backgroundColor: '#0E97FA', color: 'white', borderRadius: '10px' }}>
            <div className="px-3 py-4 p-md-5 mx-md-4">
              <h2 className="mb-4">Comece agora com o Fácil Gestão</h2>
              <p className="large mb-0 texto-descritivo">
                O Fácil Gestão é a solução ideal para empresas que buscam eficiência e organização no controle de funcionários. Cadastre-se agora e descubra como podemos ajudar a otimizar a administração do seu negócio.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}