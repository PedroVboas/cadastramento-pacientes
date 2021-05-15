import {Router} from "express";
const app = new Router();

import pacienteController from '../controllers/pacienteController.js';


app.get("/pacientes", pacienteController.list);
app.get("/pacientes/:id", pacienteController.listOne);
app.post("/pacientes",  pacienteController.create);
app.put("/pacientes/:id", pacienteController.update);


export default app;