module.exports = function(app) {
    
    var controller = app.controllers.tarefas;
    
    app.get('/tarefas', controller.listar);    
 }