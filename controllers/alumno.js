var mongoose = require('mongoose'),
	Alumno = mongoose.model('alumno'),
	express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');

router.post('/alumno', bodyParser.json(),bodyParser.urlencoded({ extended: true }), function(req,res){
	var alumno = new Alumno(req.body);
	alumno.save(function(err){
		if(err){
			res.status(500);
			return res.render('500');
		}
		res.status(200);
		res.json(alumno);
	});

});

router.get('/alumnos',function(req,res){
	Alumno.find().populate('grado').exec(function(err,result){
		if (err){
			res.status(500);
			res.render('500');
		}else{
			res.status(200);
			res.render('alumnos', { alumnos : result});
		}
	});
});

module.exports = router;