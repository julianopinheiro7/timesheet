module.exports = function(app) {
    
       var controller = {};    
       var logs = app.models.logs;
    
       controller.listar = function(req, res) {
       
        logs.find().exec()
        .then(
             function(logs) {       // Callback se der certo
                res.json(logs);
             },
             function(erro) {
                console.error(erro);    // Callback se der errado
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
             }
          );
       
       };
           
       return controller;
    
    }