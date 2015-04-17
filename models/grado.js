var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gradoSchema = new Schema({
	nombre : String,
	color : String,
	nivel : Number
});

mongoose.model('grado', gradoSchema);