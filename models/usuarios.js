const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	nome: String,
	sexo: String,
	email: String,
	endereco: {
		cidade: {
			type: String,
			required: [	true,  "Necessario informar cidade do paciente." ]
		},
		quadra: {
			type: String,
			required: [	true,  "Necessario informar endereço do paciente." ]
	
		},
		rua: {
			type: Number,
			required: [	true,"Necessario informar endereço do paciente." ]
		},
		estado: {
			type: String,
			required: [	true,  "Necessario informar estado da residencia do paciente." ]
		},
		cep: {
			type: Number,
			required: [	true,  "Necessario informar o CEP do paciente." ]
		},
		complemento: {
			type: Number,
			required: false
		}
	}, 
}, {
		timestamps: true, discriminatorKey: '_role'

});


//UserController
const UserModel = mongoose.model("User", UserSchema);


//medicoController
const MedicoModel = UserModel.discriminator("Medico", new mongooose.Schema({
	crm: String,
	senha: String
}));


//AtendenteController
const AtendenteModel = UserModel.discriminator("Atendendente", new mongooose.Schema({
	senha: String
}));


//PacienteController
const PacienteModel = UserModel.discriminator("Paciente", new mongooose.Schema({}));



