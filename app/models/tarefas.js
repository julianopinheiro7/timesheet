var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      chamado: {
        type: Number
      },  
      data: {
         type: String,
         required: true
      },
      solicitante: {
         type: String,
         required: true
      },
      projeto: {
        type: mongoose.Schema.ObjectId,        
        ref: 'projetos',
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      status: {
        type: mongoose.Schema.ObjectId,        
        ref: 'status',
        required: true
      },      
      tempo: {
        type: Number
     }
   });

   return mongoose.model('tarefa', schema);

}