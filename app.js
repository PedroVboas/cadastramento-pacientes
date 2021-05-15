import express from "express";

//rotas

import routesPacientes from "./routes/pacienteCadastro.js";
import users from "./routes/pacienteLogin.js";

//CONEXAO COM BANCO DE DADOS
import"./Database/db.js";


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

export default new App().app;
