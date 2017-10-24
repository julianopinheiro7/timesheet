var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      projeto: {
        type: String,
        required: true
      },
      dataSolicitacao: {
        type: Date,
        required: true
      },
      quantidadeHoras: {
        type: Number,
        required: true
      },
      dataSolicitacao: {
         type: Date,
         required: true
      }      
   });

   return mongoose.model('projetos', schema);

}