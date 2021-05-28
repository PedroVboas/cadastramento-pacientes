const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    sexo: String,
    email: String,
    endereco: {
        cidade: {
            type: String,
            required: [true,  "Necessario informar cidade do paciente." ]
        },
        quadra: {
            type: String,
            required: [true,  "Necessario informar endereço do paciente." ]
    
        },
        rua: {
            type: Number,
            required: [true,  "Necessario informar endereço do paciente." ]
        },
        estado: {
            type: String,
            required: [true,  "Necessario informar estado da residencia do paciente." ]
        },
        cep: {
            type: Number,
            required: [true,  "Necessario informar o CEP do paciente." ]
        },
        complemento: {
            type: Number,
            required: false
        }
    }, 
}, {
        timestamps: true, discriminatorKey: '_role'

});

const UserModel = mongoose.model("User", UserSchema);

const MedicoModel = UserModel.discriminator("Medico", new new mongooose.Schema({
    crm: String,
    senha: String
}));

const AtendenteModel = UserModel.discriminator("Atendendente", new new mongooose.Schema({
    senha: String
}));

const PacienteModel = UserModel.discriminator("Paciente", new new mongooose.Schema({}));

const paciente1 = {
    nome: "henrique",
    sexo: "m",
    email: "hene@idoijoijos.com",
    endereco: {
        cidade:"ocidental",
        quadra:"02",
        rua:"01",
        estado:"GO",
        cep:"82673682982",
        complemento:"rua bonita"
    }
}

try {
    const pacienteDoc = await PacienteModel.create(paciente1);
} catch (error) {
    
}