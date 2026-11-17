// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // LOGIN
  login: (req, res) => {
    // EXECUTAR A FUNÇÃO NO MODEL
    usuarioModels.login();

    // DIZ A RESPOSTA
    res.send("Vou chamar o model para logar");
  },
  // CRUD
  // CREATE
  criar: (req, res) => {
    usuarioModels.criarUsuario();
    res.send("Criei um usuário");
  },
  //READ
  listar: (req, res) => {
    usuarioModels.listarUsuarios();
    res.send("Mostrei a lista de usuários");
  },
  // UPDATE
  atualiza: (req, res) => {
    usuarioModels.atualizaUsuario();
    res.send("Atualizei um usuários");
  },
  // DELETE
  deletar: (req, res) => {
    usuarioModels.deletarUsuario();
    res.send("Deletei um usuário");
  },
};
