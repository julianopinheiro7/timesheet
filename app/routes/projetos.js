module.exports = function(app) {
    
    var controller = app.controllers.projetos;
    
    app.get('/projetos', controller.listar);    
 }

