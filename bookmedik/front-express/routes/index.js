// -----------------------------lib requeridos-----------------------------
	var express = require('express');
	var mongoose = require('mongoose');

// ------------------------------coneccion db------------------------------
	mongoose.connect('mongodb://localhost/bookmedik');

// -----------------------------rutas y modelos----------------------------
	var router = express.Router();
	/* GET home page. */
	router.get('/', function(req, res, next) {
		// Create a schema
		var TodoSchema = new mongoose.Schema({
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
		  updated_at: { type: Date, default: Date.now },
		});
		// Create a model based on the schema
		var todo = mongoose.model('medicos', TodoSchema);
		// Create a todo in memory
		var full = new todo({
								name:   {
											nombres:"deivid", apellidos:"Criollo"
										},
								genero: "MASCULINO",
								completed: false,
								email:"deividscriollo@gmail.com",
								fecha_nac: Date,
								documentos:{cedula:"1004034805"},
								especialidad:"Medico General",
								direccion:{
											pais: "Ecuador", 
											estado: "Imbabura", 
											ciudad: "Ibarra", 
											barrio: "Caranqui",
											calle_pri: "Gral. Julio Andrade",
											calle_sec: "Pri. Cory Cory",
											numero: "Sin numero"
										},
								phone:{casa:"06265518", movil:"0987113522"},
								note: 'Getting there...'});
		// Save it to databas
		full.save(function(err){
		  if(err)
		    console.log(err);
		  else
		    console.log(full);
		});
		
		var callback = function(err, medicos){
			if (err) {
				console.log(err);
			}
			res.send(medicos);
		}

		todo.find({},callback)
	});

module.exports = router;
