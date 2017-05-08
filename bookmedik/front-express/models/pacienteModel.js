// var mongoose = require('mongoose');
// var Schema   = mongoose.Schema;

// var pacienteSchema = new Schema({
// 	'carDoor' : Number,
// 	'color' : String
// });

// module.exports = mongoose.model('paciente', pacienteSchema);


module.exports = function(){
	var db = require("./../libs/connect_db")();

	var Schema = require('mongoose').Schema;

	var Medico = Schema({
		name: {nombres:String, apellidos:String},
		completed: Boolean,
		note: String,
		genero:String,
		email:String,
		fecha_nac: String,
		documentos:{cedula:String},
		especialidad:String,
		direccion:{pais: String, estado: String, ciudad: String, barrio: String,calle_pri: String,calle_sec: String,numero: String},
		phone:{casa:String, movil:String},
		updated_at: { type: Date, default: Date.now }
	});
	return db.model('paciente', Medico);
}