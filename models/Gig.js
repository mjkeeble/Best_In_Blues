const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    date: Date,
    enddate: Date,
    town: String,
    venue: String,
    status: {
        type: String,
        enum:['', 'BESTÄTIGT', 'VERSCHOBEN', 'ABGESAGT'],
        default: ''
    },
    comment: String
});

const Gig = mongoose.model('Gig', adminSchema);
module.exports = Gig;