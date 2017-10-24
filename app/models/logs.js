var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      dataOperacao: {
        type: Date,
        required: true
      },      
      usuario: {
        type: String,
        required: true
      },
      operacao: {
        type: String,
        required: true
      }      
   });

   return mongoose.model('logs', schema);

}