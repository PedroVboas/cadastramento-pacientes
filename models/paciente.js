import mongoose from 'mongoose';

const Paciente = new mongoose.Schema({
  nome: {
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

export default mongoose.model('paciente', Paciente);