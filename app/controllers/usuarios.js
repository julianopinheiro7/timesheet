module.exports = function(app) {
    
       var controller = {};
    
       var usuarios = app.models.usuarios;
    
       controller.listar = function(req, res) {
       
        usuarios.find().exec().then(
             function(usuarios) {       // Callback se der certo
                res.json(usuarios);
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