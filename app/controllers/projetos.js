module.exports = function(app) {
    
       var controller = {};
    
       var projetos = app.models.projetos;
    
       controller.listar = function(req, res) {
       
        projetos.find().exec().then(
             function(projetos) {       // Callback se der certo
                res.json(projetos);
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