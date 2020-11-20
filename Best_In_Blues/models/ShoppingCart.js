const mongoose = require('mongoose');
const ShopArticle = require('./ShopArticle');
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema(
    {
        articles: {
            type: Schema.Types.ObjectId,
            ref: ShopArticle,
            quantity: Number
        },
        billing_firstname: String,
        billing_lastname:String,
        billing_street: String,
        billing_zip: String,
        billing_city: String,
        billing_state: String,
        billing_telephone: String,
        billing_email: String,
        billing_country: String,
        checkout_usernote:String,
        delivery_firstname: String,
        delivery_lastname:String,
        delivery_street: String,
        delivery_zip: String,
        delivery_city: String,
        delivery_state: String,
        delivery_telephone: String,
        delivery_email: String,
        delivery_country: String,
    };

});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);
module.exports = ShoppingCart;