module.exports = function (app) {

    var controller = app.controllers.tarefas;

    app.get('/tarefas', controller.listar);
    app.get('/tarefas/:id', controller.obterUm);
    app.delete('/tarefas/:id', controller.excluir);
    app.post('/tarefas', controller.novo);
    app.put('/tarefas', controller.atualizar);
}