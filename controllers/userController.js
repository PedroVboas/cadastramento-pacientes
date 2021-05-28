const  Yup = require('yup');
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const paginate = require('mongoose-paginate-v2');

class UserController {

	async list(req, res) {
		const limit = req.query.limit || 3;
		const page = req.query.page || 1;

		User.find({}, {select: '-senha', page, limit}).then((users) => {
			return res.json({
				error: false,
				users: users
			});
		}).catch(() => {
			return res.status(400).json({
				error: true,
				code: 100,
				message: "Erro: Não foi possível executar a solicitação!"
			});
		});
		}

	async listOne(req, res) {
		User.findOne({ _id: req.params.id }, '_id nome email createAt updateAt').then((user) => {
			return res.json({
				error: false,
				user: user
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 110,
				message: "Erro: Não foi possível executar a solicitação!"
			})
		})
	}

	async create(req, res) {
		const schema = Yup.object().shape({
			nome: Yup.string()
				.required(),
			email: Yup.string()
				.email()
				.required(),
			senha: Yup.string()
				.required()
				.min(6)
		});
		try {
			await schema.validate(req.body);
		} catch(err) {
			return res.status(400).json({
				error: true,
				code: 120,
				message: err.message
			});
		}

		const emailExiste = await User.findOne({ email: req.body.email });
		if (emailExiste) {
			return res.status(400).json({
				error: true,
				code: 121,
				message: "Error: Este e-mail já está cadastrado!"
			});
		};

		const user = req.body;
		user.senha = await bcrypt.hash(user.senha, 8);

		User.create(user).then((user) => {
			return res.json(user);
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 122,
				message: "Error: Usuário não foi cadastrado com sucesso"
			});
		});
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			nome: Yup.string()
				.notOneOf(['']),
			email: Yup.string()
				.email()
				.notOneOf(['']),
			senha: Yup.string()
				.min(6)
				.notOneOf([''])
		});
		try {
			await schema.validate(req.body);
		} catch(err) {
			return res.status(400).json({
				error: true,
				code: 130,
				message: err.message
			});
		}

		const usuarioExiste = await User.findOne({_id: req.params.id});

		if(!usuarioExiste){
			return res.status(400).json({
				error: true,
				code: 131,
				message: "Erro: Usuário não encontrado!"
			});
		};

		if(req.body.email !== usuarioExiste.email){
			const emailExiste = await User.findOne({email: req.body.email});
			if(emailExiste){
				return res.status(400).json({
					error: true,
					code: 132,
					message: "Erro: Este e-mail já está cadastrado!"
				});
			};
		};

		User.updateOne({_id: req.params.id}, req.body).then(() => {
			return res.json({
				error: false,
				message: "Usuário editado com sucesso!"
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 133,
				message: "Erro: Usuário não foi editado com sucesso!"
			});
		});
	}
	async delete(req, res) {
		User.deleteOne({ _id: req.params.id }).then(() => {
			return res.json({
				error: false,
				message: "Usuário apagado com sucesso!"
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 140,
				message: "Error: Usuário não foi apagado com sucesso!"
			});
		});
	}

	async listMe(req, res) {
		User.findOne({ _id: req.userID }, '_id nome email createAt updateAt').then((user) => {
			return res.json({
				error: false,
				user: user
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 110,
				message: "Erro: Não foi possível executar a solicitação!"
			})
		})
	}

	async updateMe(req, res) {
		const schema = Yup.object().shape({
			nome: Yup.string()
				.notOneOf(['']),
			email: Yup.string()
				.email()
				.notOneOf(['']),
			senha: Yup.string()
				.min(6)
				.notOneOf([''])
		});
		try {
			await schema.validate(req.body);
		} catch(err) {
			return res.status(400).json({
				error: true,
				code: 130,
				message: err.message
			});
		}

		const usuarioExiste = await User.findOne({_id: req.userID});

		if(!usuarioExiste){
			return res.status(400).json({
				error: true,
				code: 131,
				message: "Erro: Usuário não encontrado!"
			});
		};

		if(req.body.email !== usuarioExiste.email){
			const emailExiste = await User.findOne({email: req.body.email});
			if(emailExiste){
				return res.status(400).json({
					error: true,
					code: 132,
					message: "Erro: Este e-mail já está cadastrado!"
				});
			};
		};

		User.updateOne({_id: req.userID}, req.body).then(() => {
			return res.json({
				error: false,
				message: "Usuário editado com sucesso!"
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 133,
				message: "Erro: Usuário não foi editado com sucesso!"
			});
		});
	}
	async deleteMe(req, res) {
		User.deleteOne({ _id: req.userID }).then(() => {
			return res.json({
				error: false,
				message: "Usuário apagado com sucesso!"
			});
		}).catch((err) => {
			return res.status(400).json({
				error: true,
				code: 140,
				message: "Error: Usuário não foi apagado com sucesso!"
			});
		});
	}
}

module.exports = new UserController();
