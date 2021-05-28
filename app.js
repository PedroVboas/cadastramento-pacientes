const express = require("express");

//rotas

const routesPacientes = require("./routes/pacienteCadastro.js");
const users = require("./routes/pacienteLogin.js");

//CONEXAO COM BANCO DE DADOS
require("./Database/db.js");


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes()

  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routesPacientes);
    this.app.use(users);
  }
  
}

module.exports =  new App().app;
