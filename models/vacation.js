var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vacationSchema = new Schema({
    title: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Vacation',vacationSchema);
