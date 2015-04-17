var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	morgan = require('morgan');

//Se conecta con la base de datos Mongo :)
mongoose.connect(process.env.MONGOLAB_URI);

//MODELS
require('./models/grado');
require('./models/alumno');

// Las vistas van a ser de tipo ".ejs"
app.set('view engine', 'ejs');

// Sirve para hacer logs de las peticiones
app.use(morgan('combined'));

//Todos mis assets (contenido estático) se encuentran en la carpeta /assets
app.use(express.static(__dirname + '/assets'));

//Esta aplicación require de todos los controladores en /controllers
app.use(require('./controllers'));

//La aplicación comienza a servir peticiones en el puerto siguiente
var port = 80;
app.listen(port, function() {
  console.log('Listening on port '+port+'...')
});