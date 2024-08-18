const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { get } = require("mongoose");
const SECRET = process.env.SECRET;

const usuarioController = {
  getAll: async (req, res) => {
    try {
      const usuarios = await usuarioModel.find();
      res.json(usuarios);
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const usuario = await usuarioModel.findById(id);
      res.json(usuario);
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
      };

      const response = await usuarioModel.create(usuario);

      // Redirecionar para a página de login após o registro
      res.redirect("/login");
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao criar usuário");
    }
  },
  login: async (req, res) => {
    try {
      const { email, senha } = req.body; // Obtenha email e senha do corpo da requisição

      const usuario = await usuarioModel.findOne({ email }); // Busca o usuário apenas uma vez
      if (!usuario) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      if (!senhaValida) {
        return res.status(401).json({ error: "Credenciais inválidas" });
      }

      // Gerar um JWT
      const token = jwt.sign({ usuarioId: usuario._id }, tokenSecreto, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (error) {
      console.error("Erro durante o login:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
  delete: async (req, res) => {
    try {
      const response = await usuarioModel.findById(req.params.id);

      if (!response) {
        res.status(404).json({ msg: "Usuário não encontrado" });
        return;
      }

      const deleteUsuario = await usuarioModel.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ deleteUsuario, msg: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
      };

      const response = await usuarioModel.findByIdAndUpdate(
        req.params.id,
        usuario
      );

      if (!response) {
        res.status(404).json({ msg: "Usuário não encontrado" });
        return;
      }

      res
        .status(200)
        .json({ response, msg: "Usuário atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = usuarioController;
