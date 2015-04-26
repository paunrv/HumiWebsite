var express = require('express'),
	router = express.Router();


//router.use('/something', require('./something')); <- agregar otros controladores

router.use('/', require('./grado'))
router.use('/', require('./alumno'))


module.exports = router;