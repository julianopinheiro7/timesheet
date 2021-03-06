module.exports = function(app) {

    var controller = {};

    var status = app.models.status;

    controller.listar = function(req, res) {

        status.find().exec().then(
            function(status) {
                res.json(status);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obterUm = function(req, res) {
        var idStatus = req.params.id;

        status.findById(idStatus).then(
            function (status) {
                res.json(status);
            },
            function (erro) {
                console.error(erro);
                res.status(404).send('Status não encontrado');
            }
        );
    }
    
    controller.excluir = function(req, res) {

        var idStatus = req.params.id;
        
        status.remove({_id: idStatus }).exec().then(
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

        status.create(req.body).then(
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

        var idStatus = req.body._id;

        status.findByIdAndUpdate(idStatus, req.body).then(
            function (status) {
                res.status(200).json(status);
            },
            function (erro) {
                console.error(erro);
                res.status(404).json('Status não encontrado para atualizar');
            }
        )
    }
    
    return controller;
    
}