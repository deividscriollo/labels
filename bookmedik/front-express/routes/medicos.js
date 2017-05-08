// -----------------------------lib requeridos-----------------------------
	var express = require('express');
	var router = express.Router();

	var model = require('./../model/medicos')();

// -----------------------------rutas y modelos----------------------------

	var router = express.Router();

	/* POST /model */
		router.get('/medicos', function(req, res, next) {
		    model.find(function(err, medicos) {
		        if (err) return next(err);
		        res.json(medicos);
		    });
		});

	/* POST /model save */
		router.post('medicos/', function(req, res, next) {
		    console.log(req);
		    model.create(req.body, function(err, post) {
		        if (err) return next(err);
		        res.json(post);
		    });
		});

	/* GET /model/id */
		router.get('medicos/:id', function(req, res, next) {
		    model.findById(req.params.id, function(err, post) {
		        if (err) return next(err);
		        res.json(post);
		    });
		});

	/* PUT /model/:id */
		router.put('medicos/:id', function(req, res, next) {
		    model.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		        if (err) return next(err);
		        res.json(post);
		    });
		});

	/* DELETE /model/:id */
		router.delete('medicos/:id', function(req, res, next) {
		    model.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		        if (err) return next(err);
		        res.json(post);
		    });
		});

	module.exports = router;