var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      nomeStatus: {
         type: String,
         required: true
      }
   });

   return mongoose.model('status', schema);

}