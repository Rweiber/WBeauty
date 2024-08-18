# WBeauty API

API simples para gerenciamento de usuários (CRUD) com autenticação JWT, construída com Node.js, Express e MongoDB.

## Tecnologias Utilizadas

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Autenticação:**
- JWT (JSON Web Token)

**Segurança:**
- bcrypt (para hash de senhas)
- dotenv (para carregar variáveis de ambiente)

**Outras:**
- body-parser
- cors
- ejs (para views, se necessário)
- morgan

**Ferramentas de Desenvolvimento:**
- nodemon (para reinicialização automática do servidor)

## Como Executar o Projeto

### Pré-requisitos

- **Node.js e npm (ou yarn):** Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
- **MongoDB:** Tenha um servidor MongoDB instalado e em execução, seja localmente ou em um serviço de nuvem.

### Passos

1. **Clone o Repositório:**

    ```bash
    git clone https://github.com/seu-usuario/wbeauty.git
    cd wbeauty
    ```

2. **Instale as Dependências:**

    ```bash
    npm install
    ```

3. **Configure as Variáveis de Ambiente:**

    Crie um arquivo `.env` na raiz do projeto.

    Adicione as seguintes variáveis de ambiente ao seu arquivo `.env`, substituindo os valores entre colchetes pelos seus dados:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://[seu_usuario]:[sua_senha]@[seu_host]:[sua_porta]/[seu_banco_de_dados]
    JWT_SECRET=sua_chave_secreta_jwt
    ```

    **JWT_SECRET:** Gere uma chave secreta aleatória e nunca a compartilhe publicamente.

4. **Inicie o Servidor:**

    ```bash
    npm start
    ```

    O servidor será iniciado em [http://localhost:3000](http://localhost:3000) (ou na porta especificada na variável de ambiente `PORT`).

## Rotas da API

**Autenticação:**
- `POST /login`: Recebe email e senha, verifica as credenciais e retorna um token JWT em caso de sucesso.

**Usuários:**
- `POST /api/usuarios`: Cria um novo usuário.
- `GET /api/usuarios`: Obtém todos os usuários (requer autenticação).
- `GET /api/usuarios/:id`: Obtém um usuário pelo ID (requer autenticação).
- `PUT /api/usuarios/:id`: Atualiza um usuário pelo ID (requer autenticação).
- `DELETE /api/usuarios/:id`: Exclui um usuário pelo ID (requer autenticação).

**Observações:**
- As rotas que requerem autenticação devem incluir o token JWT no cabeçalho `Authorization` da requisição, no formato `Bearer <token>`.
- Adapte as rotas, controladores e modelos às suas necessidades específicas.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto! Abra uma issue para relatar bugs, solicitar recursos ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
