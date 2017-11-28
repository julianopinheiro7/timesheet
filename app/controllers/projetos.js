module.exports = function (app) {

    var controller = {};

    var projetos = app.models.projetos;

    controller.listar = function (req, res) {

        projetos.find().exec().then(
            function (projetos) {       // Callback se der certo
                res.json(projetos);
            },
            function (erro) {
                console.error(erro);    // Callback se der errado
                res.status(500).json(erro);
            }
        );
    };

    controller.obterUm = function (req, res) {
        var idProjeto = req.params.id;

        projetos.findById(idProjeto).then(
            function (projetos) {
                res.json(projetos);
            },
            function (erro) {
                console.error(erro);
                res.status(404).send('Projeto não encontrado')
            }
        );
    }

    controller.excluir = function (req, res) {

        var idProjeto = req.params.id;
        
        projetos.remove({ _id: idProjeto }).exec().then(
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

        projetos.create(req.body).then(
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

        var idProjeto = req.body._id;

        projetos.findByIdAndUpdate(idProjeto, req.body).then(
            function (projetos) {
                res.status(200).json(projetos);
            },
            function (erro) {
                console.error(erro);
                res.status(404).json('Projeto não encontrado para atualizar');
            }
        )
    }


    return controller;

}