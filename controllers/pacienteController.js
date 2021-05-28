const Pacientes = require("../models/usuarios.js");

class pacienteController {

	async list(req, res) {
		Pacientes.find({}).select().then((pacientes) => {
			return res.json({
				error: false,
				pacientes
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 100,
				message: "Erro ao consultar pacientes"
			});
		});
	}

	async listOne(req, res) {
		Pacientes.findOne({ _id: req.params.id }).then((pacientes) => {
			return res.json({
				error: false,
				paciente: pacientes
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 110,
				message: "Erro ao consultar Paciente especifico."
			});
		});
	}


	async create(req, res) {
		Pacientes.create(req.body).then((pacientes) => {
			return res.json({ pacientes });
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 120,
				message: "Erro ao cadastrar paciente"
			});
		});

	}

	async update(req, res) {
		Pacientes.updateOne({_id: req.params.id}, req.body).then(() => {
			return res.json({
				error: false,
				message: "Dados do paciente atualizados com sucesso"
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code:130,
				err: "Erro ao atualizar dados do paciente"
			});
		});
	}

}

module.exports =  new pacienteController();
