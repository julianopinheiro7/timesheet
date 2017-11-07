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

        var status = status.filter(function(status){
            return status._id == idStatus;
        });

        if(status[0]) {
            res.json(status[0]);
        }
        else {
            res.status(404).send('Status não encontrado');
        }
    }

    controller.excluir = function(req, res) {

        var idStatus = req.params.id;

          var remanescentes = status.filter(function(rec) {
            return rec.id != idStatus;
        });

        if(remanescentes.length < status.length) { 
            status = remanescentes;
            res.status(200).send('Status excluído');
         }
         else {
            res.status(404).send('Status para exclusão não encontrado');
         }
    }
    
    return controller;
    
}