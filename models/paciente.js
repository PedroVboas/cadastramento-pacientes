const mongoose = require('mongoose');

const Paciente = new mongoose.Schema({
  nome: {
    type: String, 
    required: true
    },
  sexo: {
      type: String, 
      required: true
      },
  email:{
    type: String, 
    required: true
    },
  cpf: {
    type: String, 
    required: true
    },
  telefone: {
    type: Number, 
    required: true
    },
}, {
  timestamps: true
  });

module.exports=  mongoose.model('paciente', Paciente);