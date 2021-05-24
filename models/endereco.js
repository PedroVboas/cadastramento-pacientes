const mongoose = require('mongoose');

const Endereco = new mongoose.Schema({

    cidade: {
        type: String,
        required: [true,
            "Necessario informar cidade do paciente."
        ]
    },
    quadra: {
        type: String,
        required: [true, 
            "Necessario informar endereço do paciente."
        ]

    },
    rua: {
        type: Number,
        required: [true, 
            "Necessario informar endereço do paciente."
        ]
    },
    estado: {
        type: String,
        required: [true, 
            "Necessario informar estado da residencia do paciente."
        ]
    },
    cep: {
        type: Number,
        required: [true, 
            "Necessario informar o CEP do paciente."]
    },
    complemento: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('endereco', Endereco);