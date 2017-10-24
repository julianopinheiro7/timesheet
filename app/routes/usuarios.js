module.exports = function(app) {
    
    var controller = app.controllers.usuarios;
    
    app.get('/usuarios', controller.listar);    
 }