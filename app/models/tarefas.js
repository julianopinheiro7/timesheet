var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      data: {
         type: Date,
         required: true
      },
      solicitante: {
         type: String,
         required: true
      },
      projeto: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      chamado: {
         type: Number
      },
      tempo: {
        type: Number
     }
   });

   return mongoose.model('tarefas', schema);

}