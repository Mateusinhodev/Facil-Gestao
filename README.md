# Fácil Gestão

Fácil Gestão é um sistema SaaS desenvolvido com **React, JavaScript e Firebase**, projetado para facilitar o gerenciamento de funcionários em empresas de diversos segmentos. O sistema oferece um **CRUD completo**, além de cálculos automáticos para melhor controle administrativo.

## 📌 Funcionalidades Principais

- **Cadastro e Login:** Empresas podem se registrar e acessar o sistema com e-mail e senha, utilizando **Firebase Authentication** para segurança.
- **Gerenciamento de Funcionários:** Permite **adicionar, visualizar, editar e excluir** funcionários.
- **Cards Informativo:** Exibe o **total de funcionários cadastrados** e o **cálculo da folha de pagamento**.
- **Pesquisa Rápida:** Localize funcionários facilmente através de um campo de busca.
- **Cálculo de Período Vigente:** Baseado na **data de contratação e expiração do vínculo**.
- **Sistema de Alertas:** Notificações para ações bem-sucedidas ou falhas com **React Toastify**.
- **Página de Erro 404:** Renderizada caso o usuário tente acessar uma página inexistente.
- **Módulos em Construção:** Seções como **Projetos, Relatórios e Finanças**.

## 🖥️ Estrutura do Sistema

### 📄 Páginas Principais

- **Login & Cadastro:** Acesso ao sistema mediante credenciais da empresa.
- **Funcionários:** Listagem e gerenciamento completo dos funcionários.
- **Construction Page:** Página exibida para as páginas que ainda estão em construção.
- **Error 404:** Página exibida caso o usuário tente acessar uma rota inválida.

### 🛠 Componentes Principais

#### 📌 Cadastro e Visualização
- **Adicionar Funcionário:** Modal que permite inserir um novo funcionário.
- **Formulário Funcionário:** Captura e valida os dados do funcionário.
- **Upload de Avatar:** Integração com **IMGUR API** para armazenar fotos de perfil.
- **Visualizar Funcionário:** Modal detalhado com todas as informações do funcionário.

#### ✏️ Edição e Exclusão
- **Editar Funcionário:** Modal para alteração de dados (exceto a foto de perfil).
- **Excluir Funcionário:** Modal de confirmação para remoção segura.

## ⚙️ Tecnologias Utilizadas

- **React** - Framework para construção da interface.
- **JavaScript** - Linguagem principal do projeto.
- **Firebase** - Utilizado para autenticação e armazenamento de dados.
- **CSS** - Utilizado para a estilização
- **Bootstrap** - Estilização e modais responsivos.
- **React Toastify** - Notificações e alertas personalizados.
- **IMGUR API** - Hospedagem de imagens de perfil.

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-repositorio/facil-gestao.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd facil-gestao
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

Desenvolvido por Mateus Dev 🧑‍💻⚡

