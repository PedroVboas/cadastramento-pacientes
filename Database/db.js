import mongoose from "mongoose";

const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

// const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

//   class Connection {
//     constructor() {
//         this.mongodb();
//     }

//     mongodb() {
//         mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }).then(() => {
//             console.log("Conectado a base de dados com sucesso!");
//         }).catch((exception) => {
//             console.log("Erro ao conectar a base de dados." + exception);
//         });
//     }

// }

class Connection {
    constructor() {
      this.mongodb();
    }
    //uri: mongodb+srv://<user>:<password>@<host>/<database>
    mongodb() {
      mongoose.connect(//(DB_HOST) ? remoto : local
          (DB_HOST) ? `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority` 
          : "mongodb://localhost/adsbackend", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log("Conexão com o MongoDb realizada com sucesso!");
      }).catch((exception) => {
        console.log("Erro: Conexão com MongoDB não foi realizada com sucesso" + exception);
      });
    }
  }
  
export default new Connection();