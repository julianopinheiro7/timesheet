var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      nomeUsuario: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      perfilAcesso: {
        type: String,
        required: true
      },
      dataCadastro: {
         type: String,
         required: true
      }      
   });

   return mongoose.model('usuarios', schema);

}