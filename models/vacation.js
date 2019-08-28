var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    desnam: String,
    des: String
}, {
    timestamps: true
});

var vacationSchema = new Schema({
    title: String,
    description: String,
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Vacation',vacationSchema);
