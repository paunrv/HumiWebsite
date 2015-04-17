var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var alumnoSchema = new Schema({
	matricula : String,
	nombre : String,
	apellido : String,
	tutor : String,
	foto : String,
	fechaNacim: {type: Date},
	condicionMedica : String,
	grado : {type: Schema.Types.ObjectId,ref:'grado'}
});

mongoose.model('alumno', alumnoSchema);