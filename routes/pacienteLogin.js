import {Router} from "express";
const app = new Router();

import userController from '../controllers/userController.js';

app.get("/user", userController.list);
app.get("/user/:id", userController.listOne);
app.post("/user",  userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.delete);

export default app;