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
  criar: async (req, res) => {
    try {
      // COLETA AS INFORMAÇÃOES DO BODY DA REQUISIÇÃO
      const {nome, email, senha, perfil} = req.body

      // PASSA AS INFORMAÇÕES PRO MODEL
      await usuarioModels.criarUsuario(nome, email, senha, perfil)

      // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
      res.redirect("/usuarios/listar")
    } 
    catch (erro) {
      // MOSTRA O ERRO NO TERMINAL
      console.log(erro);
      // RENDERIZA A PÁGINA DE ERRO, MSOTRANDO PRO USUÁRIO UMA MENSAGEM
      res.render("erro",{erro, mensagem:"Erro ao criar o usuário"})
    }
  },
  //READ
  listar: (req, res) => {
    usuarioModels.listarUsuarios();
    res.send("Mostrei a lista de usuários");
  },
  // UPDATE
  atualizar: (req, res) => {
    usuarioModels.atualizarUsuario();
    res.send("Atualizei um usuários");
  },
  // DELETE
  deletar: (req, res) => {
    usuarioModels.deletarUsuario();
    res.send("Deletei um usuário");
  },
};
