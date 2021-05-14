import Pacientes from "../models/paciente.js";

class pacienteController {


  async list(req, res) {
    Paciente.find({}).select().then((pacientes) => {
      return res.json({
        error: false,
        pacientes
      });
    }).catch((err) => {
      return res.status(400).json({
        error: true,
        code: 100,
        message: err
      });
    });
  }
 
  async create(req, res) {
    Paciente.create(req.body).then((pacientes) => {
      return res.json({pacientes});
    }).catch((err) => {
      return res.status(400).json({
        error: true,
        code: 120,
        message: err
      });
    });
      
    }

}

export default new pacienteController();
