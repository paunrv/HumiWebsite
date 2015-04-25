var mongoose = require('mongoose'),
	Grado = mongoose.model('grado'),
	express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser');

router.post('/api/grado', bodyParser.json(),bodyParser.urlencoded({ extended: true }), function(req,res){
	console.log(req.body);
	var grado = new Grado(req.body);
	grado.save(function(err){
		if(err){
			res.status(500);
			return res.render('500');
		}
		res.status(200);
		res.json(grado);
	});

});

router.get('/api/grados', bodyParser.json(),bodyParser.urlencoded({ extended: true }), function(req,res){
	Grado.find(function(err, grados) {
		if (err) {
			res.status(500);
			return res.render('500');
		}
	 	res.json(grados);
 	});
});

module.exports = router;


