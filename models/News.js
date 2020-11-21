const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    text: String,
    image: String,
    //date modified
    link: String,
    timestamps: {
        updatedAt: Number
    }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;