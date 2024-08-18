const router = require("express").Router();
const usuarioController = require("../controllers/usuarioController");

// Import the `usuario.js` router
const usuariosRouter = require("./usuarios"); // Update this line to correctly import the router

// 1. Rotas para página de registro (registro.ejs)
router.get("/registro", (req, res) => {
  res.render("registro", { title: "Registro" });
});

// Nova rota para receber os dados do formulário e criar o usuário
router.post("/registro", usuarioController.create);

// 2. Rotas para página de login (login.ejs)
router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});
// Rota POST para login
router.post("/login", usuarioController.login);

// 3. Rota para a página principal (index.ejs)
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

// 4. Rotas de usuários (com prefixo '/usuarios')
router.use("/usuarios", usuariosRouter); // This should work now

module.exports = router;
