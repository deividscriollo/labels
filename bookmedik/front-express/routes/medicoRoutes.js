var express = require('express');
var router = express.Router();
var medicoController = require('../controllers/medicoController.js');

/*
 * GET
 */
router.get('/', medicoController.list);

/*
 * GET
 */
router.get('/:id', medicoController.show);

/*
 * POST
 */
router.post('/', medicoController.create);

/*
 * PUT
 */
router.put('/:id', medicoController.update);

/*
 * DELETE
 */
router.delete('/:id', medicoController.remove);

module.exports = router;
