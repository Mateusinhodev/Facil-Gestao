// Importa as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Configuração do Firebase com as credenciais do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyDrjogxv66EWuxEuPld6CeOYiVk7jCMnKU",
  authDomain: "facil-gestao.firebaseapp.com",
  projectId: "facil-gestao",
  storageBucket: "facil-gestao.firebasestorage.app",
  messagingSenderId: "577481242183",
  appId: "1:577481242183:web:dee46ce6bea46d4e0c2362"
};

// Inicializa o Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializa o Firestore (Banco de Dados NoSQL do Firebase)
const db = getFirestore(firebaseApp)

// Exporta a instância do banco de dados para ser usada nos outros arquivos
export { db }