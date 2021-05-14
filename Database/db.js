import mongoose from "mongoose";

const uri = "mongodb+srv://root:user123@projeto-integrado.dkqn1.mongodb.net/pacientes?retryWrites=true&w=majority";

  class Connection {
    constructor() {
        this.mongodb();
    }

    mongodb() {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conectado a base de dados com sucesso!");
        }).catch((exception) => {
            console.log("Erro ao conectar a base de dados." + exception);
        });
    }

}
export default new Connection();