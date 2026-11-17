// IMPORTANDO AS CONFIGURAÇÕES DO BANCO
const db = require("../config/db.js");

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
  // LOGIN
  login: () => {
    console.log("Login usuário funcionando");
  },
  // CRUD
  // CREATE
  criarUsuario: () => {
    console.log("Criei um usuário");
  },
  //READ
  listarUsuarios: () => {
    console.log("Toma ai os usuários");
  },
  // UPDATE
  atualizaUsuario: () => {
    console.log(" Atualizei um usuários");
  },
  // DELETE
  deletarUsuario: () => {
    console.log("Apaguei um usuário");
  },
};
