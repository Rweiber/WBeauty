const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");
const jwt = require("jsonwebtoken");

const tokenSecreto = "sua_chave_secreta"; // **IMPORTANTE:** A mesma chave secreta usada para gerar o token

// Middleware de autenticação
function verificarAutenticacao(req, res, next) {
  const token = req.header("Authorization"); // Obtém o token do cabeçalho Authorization

  if (!token) {
    return res
      .status(401)
      .json({ error: "Acesso negado: Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, tokenSecreto);
    req.usuario = decoded; // Define o usuário autenticado no objeto da requisição
    next();
  } catch (error) {
    res.status(401).json({ error: "Acesso negado: Token inválido" });
  }
}

// Exemplo de rota protegida
router.get("/", verificarAutenticacao, usuarioController.getAll);

// Rota para CRIAR um novo usuário (POST) - `/api/usuarios`
router.post("/", usuarioController.create);

// Rota para OBTER um usuário por ID (GET) - `/api/usuarios/:id`
router.get("/:id", usuarioController.getOne);

// Rota para ATUALIZAR um usuário por ID (PUT) - `/api/usuarios/:id`
router.put("/:id", usuarioController.update);

// Rota para DELETAR um usuário por ID (DELETE) - `/api/usuarios/:id`
router.delete("/:id", usuarioController.delete);

module.exports = router;
