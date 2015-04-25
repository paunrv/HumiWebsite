var express = require('express'),
	router = express.Router();


//router.use('/something', require('./something')); <- agregar otros controladores

router.use('/', require('./grado'))
router.use('/', require('./alumno'))

router.get('/', function(req,res){
	res.status(200);
	res.render('index');
});

router.get('/alumnos', function(req,res){
	res.status(200);
	res.render('alumnos');
});

module.exports = router;