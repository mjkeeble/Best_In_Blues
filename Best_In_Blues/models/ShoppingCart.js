const mongoose = require('mongoose');
const ShopArticle = require('./ShopArticle');
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema(
    {
        articles: {
            type: Schema.Types.ObjectId,
            ref: ShopArticle
        },
        quantity: number
    };

});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = ShoppingCart;