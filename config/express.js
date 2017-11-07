var express = require('express');
var load = require('express-load');
var cors = require('cors');
let bodyParser = require('body-parser');

module.exports = function () {
  var app = express();

  app.use(cors());

  //app.use(express.static('./public'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.set('port', 3000);
  app.set('ip', '127.0.0.1');

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  load('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};