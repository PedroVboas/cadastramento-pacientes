const mongoose = require("mongoose");

class Connection {
    constructor() {
      this.mongodb();
    }
    mongodb() {
      mongoose.connect(
          (process.env.DB_HOST) ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority` 
          : "mongodb://localhost/pacientes", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log("Conexão realizada com sucesso!");
      }).catch((exception) => {
        console.log("Erro de conexão com o banco." + exception);
      });
    }
  }
  
module.exports =  new Connection();