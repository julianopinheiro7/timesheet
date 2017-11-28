var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      nomeProjeto: {
        type: String,
        required: true
      },
      dataSolicitacao: {
        type: String,
        required: true
      },
      dataConclusao: {
         type: String,
         required: true
      },
      quantidadeHoras: {
        type: String,
        required: true
      }
   });

   return mongoose.model('projetos', schema);

}