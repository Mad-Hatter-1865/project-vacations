var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
    picture: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var destinationSchema = new Schema({
    desnam: {
       type: String,
       required: true
    },
    des: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var vacationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    destinations: [destinationSchema],
    piclinks: [pictureSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Vacation',vacationSchema);
