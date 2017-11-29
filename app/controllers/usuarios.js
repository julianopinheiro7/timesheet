module.exports = function (app) {

    var controller = {};

    var usuarios = app.models.usuarios;

    controller.listar = function (req, res) {

        usuarios.find().exec().then(
            function (usuarios) {       // Callback se der certo
                res.json(usuarios);
            },
            function (erro) {
                console.error(erro);    // Callback se der errado
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
            }
        );
    };

    controller.obterUm = function (req, res) {
        var idUsuario = req.params.id;

        usuarios.findById(idUsuario)(
            function (usuarios) {
                res.json(usuarios);
            },
            function (erro) {
                console.error(erro);
                res.status(404).send('Usuario não encontrado');
            }
        );
    };

    controller.excluir = function (req, res) {
        var idUsuario = req.params.id;

        usuarios.remove({ _id: idUsuario }).exec().then(
            function () {
                res.status(204).end();
            },
            function (erro) {
                console.error(erro);
            }
        );
    }

    controller.novo = function (req, res) {
        console.log(req.body);

        usuarios.create(req.body).then(
            function (result) {
                res.status(500).json(erro);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.atualizar = function (req, res) {

        var idUsuario = req.body._id;

        usuarios.findByIdAndUpdate(idUsuario, req.body).then(
            function (usuarios) {
                res.status(200).json(usuarios);
            },
            function (erro) {
                console.error(erro);
                res.status(404).json('Usuario não encontrado para atualizar.')
            }
        )
    }

    return controller;
}