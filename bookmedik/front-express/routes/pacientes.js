var express = require('express');
var router = express.Router();
var pacienteController = require('../controllers/pacienteController.js');

/*
 * GET
 */
router.get('/', pacienteController.list);

/*
 * GET
 */
router.get('/:id', pacienteController.show);

/*
 * POST
 */
router.post('/', pacienteController.create);

/*
 * PUT
 */
router.put('/:id', pacienteController.update);

/*
 * DELETE
 */
router.delete('/:id', pacienteController.remove);

module.exports = router;
