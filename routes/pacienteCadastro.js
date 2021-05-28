const {Router} = require("express");
const app = new Router();

const pacienteController = require('../controllers/pacienteController.js');


app.get("/pacientes", pacienteController.list);
app.get("/pacientes/:id", pacienteController.listOne);
app.post("/pacientes",  pacienteController.create);
app.put("/pacientes/:id", pacienteController.update);


module.exports = app;