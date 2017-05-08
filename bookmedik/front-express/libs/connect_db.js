	// lib requeridos
	var mongoose = require('mongoose');
	var db;

	module.export = function(){
		if (!db) {
			db = mongoose.connect('mongodb://localhost/bookmedik');
		}
		return db;
	}

	