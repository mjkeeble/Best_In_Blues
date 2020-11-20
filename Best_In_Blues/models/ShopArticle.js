const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopArticleSchema = new Schema({
    artist: String,
    title: String,
    year: Number,
    description: String,
    price: Number,
    promotion:{
        promotionText: String,
        promotionImage: String
    },
    endorsements:[{quote: String, source: String}],
    available: Boolean,
    delivery: String,
    image: String
});

const ShopArticle = mongoose.model('ShopArticle', shopArticleSchema);
module.exports = ShopArticle;