module.exports = function(app) {
    
       var controller = {};    
       var tarefas = app.models.tarefas;
    
       controller.listar = function(req, res) {
       
        tarefas.find().exec().then(
             function(tarefas) {       // Callback se der certo
                res.json(tarefas);
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