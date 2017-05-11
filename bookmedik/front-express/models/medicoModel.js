var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var medicoSchema = new Schema({	'carDoor' : Number,	'color' : String});

module.exports = mongoose.model('medico', medicoSchema);
