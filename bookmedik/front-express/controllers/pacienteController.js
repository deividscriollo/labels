var pacienteModel = require('../models/pacienteModel')();

/**
 * pacienteController.js
 *
 * @description :: Server-side logic for managing pacientes.
 */
module.exports = {

    /**
     * pacienteController.list()
     */
    list: function (req, res) {
        pacienteModel.find(function (err, pacientes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting paciente.',
                    error: err
                });
            }
            return res.json(pacientes);
        });
    },

    /**
     * pacienteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        pacienteModel.findOne({_id: id}, function (err, paciente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting paciente.',
                    error: err
                });
            }
            if (!paciente) {
                return res.status(404).json({
                    message: 'No such paciente'
                });
            }
            return res.json(paciente);
        });
    },

    /**
     * pacienteController.create()
     */
    create: function (req, res) {
        var paciente = new pacienteModel({
			carDoor : req.body.carDoor,
			color : req.body.color
        });

        paciente.save(function (err, paciente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating paciente',
                    error: err
                });
            }
            return res.status(201).json(paciente);
        });
    },

    /**
     * pacienteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        pacienteModel.findOne({_id: id}, function (err, paciente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting paciente',
                    error: err
                });
            }
            if (!paciente) {
                return res.status(404).json({
                    message: 'No such paciente'
                });
            }

            paciente.carDoor = req.body.carDoor ? req.body.carDoor : paciente.carDoor;
			paciente.color = req.body.color ? req.body.color : paciente.color;
			
            paciente.save(function (err, paciente) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating paciente.',
                        error: err
                    });
                }

                return res.json(paciente);
            });
        });
    },

    /**
     * pacienteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        pacienteModel.findByIdAndRemove(id, function (err, paciente) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the paciente.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
