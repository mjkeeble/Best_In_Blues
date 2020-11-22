const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    text: String,
    image: String,
    link: [
        {
            url: String,
            linkText: String
        },
    ],
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;