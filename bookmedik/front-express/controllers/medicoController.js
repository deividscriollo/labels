var medicoModel = require('../models/medicoModel.js');

/**
 * medicoController.js
 *
 * @description :: Server-side logic for managing medicos.
 */
module.exports = {

    /**
     * medicoController.list()
     */
    list: function (req, res) {
        medicoModel.find(function (err, medicos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting medico.',
                    error: err
                });
            }
            return res.json(medicos);
        });
    },

    /**
     * medicoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        medicoModel.findOne({_id: id}, function (err, medico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting medico.',
                    error: err
                });
            }
            if (!medico) {
                return res.status(404).json({
                    message: 'No such medico'
                });
            }
            return res.json(medico);
        });
    },

    /**
     * medicoController.create()
     */
    create: function (req, res) {
        var medico = new medicoModel({			carDoor : req.body.carDoor,			color : req.body.color
        });

        medico.save(function (err, medico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating medico',
                    error: err
                });
            }
            return res.status(201).json(medico);
        });
    },

    /**
     * medicoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        medicoModel.findOne({_id: id}, function (err, medico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting medico',
                    error: err
                });
            }
            if (!medico) {
                return res.status(404).json({
                    message: 'No such medico'
                });
            }

            medico.carDoor = req.body.carDoor ? req.body.carDoor : medico.carDoor;			medico.color = req.body.color ? req.body.color : medico.color;			
            medico.save(function (err, medico) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating medico.',
                        error: err
                    });
                }

                return res.json(medico);
            });
        });
    },

    /**
     * medicoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        medicoModel.findByIdAndRemove(id, function (err, medico) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the medico.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
