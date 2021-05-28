const {Router} = require("express");
const app = new Router();

const userController = require('../controllers/userController.js');

app.get("/user", userController.list);
app.get("/user/:id", userController.listOne);
app.post("/user",  userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.delete);

module.exports = app;