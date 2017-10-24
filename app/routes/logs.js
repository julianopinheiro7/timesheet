module.exports = function(app) {
    
    var controller = app.controllers.logs;
    
    app.get('/logs', controller.listar);    
 };