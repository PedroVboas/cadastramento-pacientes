import {Router} from "express";
const app = new Router();


app.get("/pacientes", async(req, res) => {
  res.send("Pagina de pacientes");
})

export default app;