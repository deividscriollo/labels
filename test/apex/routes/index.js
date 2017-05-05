
// ----------------------------------lib require----------------------------------
	var express = require('express');
	// Load mongoose package
	var mongoose = require('mongoose');
	// Connect to MongoDB and create/use database called personal
	mongoose.connect('mongodb://localhost/personal');

// inicializar paquetes
	var router = express.Router();

// --------------------------inicializar rutas y methodos-------------------------
	/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Expre' });
	});
	router.get('/personal', function(req, res) {		
		// Create a schema
		var TodoSchema = new mongoose.Schema({
		  name: String,
		  completed: Boolean,
		  note: String,
		  updated_at: { type: Date, default: Date.now },
		});
		// Create a model based on the schema
		var todo = mongoose.model('esqu', TodoSchema);

		// Create a todo in memory
		var full = new todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
		// Save it to database
		full.save(function(err){
		  if(err)
		    console.log(err);
		  else
		    console.log(full);
		});
		var callback = function(err, medico){
			if (condition) {
				expression
			}
			res.send()
		}

		todo.find({},callback)



		res.send('index xpresismente');
	});

	module.exports = router;
