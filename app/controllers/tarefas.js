module.exports = function (app) {

    var controller = {};

    var tarefas = app.models.tarefas;

    controller.listar = function (req, res) {

        tarefas.find().populate('status').exec().then(
            function (tarefas) {       // Callback se der certo
                res.json(tarefas);
            },
            function (erro) {
                console.error(erro);    // Callback se der errado
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
            }
        );
    };

    controller.obterUm = function (req, res) {
        var idTarefa = req.params.id;

        tarefas.findById(idTarefa).then(
            function (tarefas) {
                res.json(tarefas);
            },
            function (erro) {
                console.error(erro);
                res.status(404).send('Tarefa não encontrada');
            }
        );
    }

    controller.excluir = function (req, res) {

        var idTarefa = req.params.id;

        tarefas.remove({_id: idTarefa }).exec().then(
            function () {
                //http 204: ok, sem conteudo
                res.status(204).end();
            },
            function (erro) {
                console.error(erro);
            }
        );
    }

    controller.novo = function (req, res) {
        console.log(req.body);

        tarefas.create(req.body).then(
            function (result) {
                res.status(201).json(result);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        )
    }

    controller.atualizar = function (req, res) {

        var idTarefa = req.body._id;

        tarefas.findByIdAndUpdate(idTarefa, req.body).then(
            function (tarefas) {
                res.status(200).json(tarefas);
            },
            function (erro) {
                console.error(erro);
                res.status(404).json('Tarefa não encontrada para atualizar');
            }
        )
    }

    return controller;

}