module.exports = function(app) {
    
    var controller = app.controllers.status;
    
    app.get('/status', controller.listar);
    app.get('/status/:id', controller.obterUm);
    app.delete('/status/:id', controller.excluir);
    app.post('/status', controller.novo);
    app.put('/status', controller.atualizar);
 }