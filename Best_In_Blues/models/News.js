const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    text: String,
    image: String,
    //date modified
    link: String,
    timestamps: {
        updatedAt: 'updated_at'
    }
});

const News = mongoose.model('News', adminSchema);
module.exports = News;