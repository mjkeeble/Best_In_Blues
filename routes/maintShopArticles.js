// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const shopArticle = require('../models/ShopArticle');

const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user){
            next();
        } else {
            res.redirect('/webmaster')
        }
    }
  }

router.get('/shopArticle/:id/delete', loginCheck(), (req, res) => {
    console.log(`delete shop article`);
    console.log(req.body);

    // let r = window.confirm(`Sie sind gerade dabei \n${req.body.artist} - ${req.body.title} zu löschen.\n Clicken Sie OK zu bestätigen.`)
    // if (r) {
        shopArticle.findByIdAndRemove({ _id: req.params.id })
            .then(() => {
                // window.alert("Artikel wurde gelöscht")
                res.redirect('/maintainShopList')
            })
            .catch(err => {
                console.log(err);
            })
    // }

});

//=============================================
router.get('/shopArticle/:id/edit?', loginCheck(), (req, res) => {
    console.log(`open edit shop article form`);
    console.log(req.params.id);

    shopArticle.findById(req.params.id)
        .then(article => {
            console.log(article);
            res.render("maintenance/shopArticles/editShopArticle", { article, status: 'edit' });
        })
        .catch(err => {
            console.log(err);
        });
});

//=============================================
router.post('/shopArticle/:id/edit', (req, res) => {
    console.log(`post article edit`);
    console.log(req.body);
    const { artist, title, year, description, price, promotionText, promotionImage, image, available, delivery, spotify, shoppingcart } = req.body;
    shopArticle.findByIdAndUpdate(req.params.id, {
        artist: artist,
        title: title,
        year: year,
        description: description,
        price: price,
        promotionText: promotionText,
        promotionImage: promotionImage,
        image:image,
        available: available,
        delivery: delivery,
        spotify: spotify,
        shoppingcart: shoppingcart
    })
        .then(() => {
            res.redirect("/maintainShopList")
        })
        .catch(err => {
            console.log(err)
        })
});

//=============================================
router.get('/shopArticle/add/', loginCheck(), (req, res) => {
    console.log(`open add article form`);
    res.render("maintenance/shopArticles/editShopArticle");
})

//=============================================
router.post('/shopArticle/add/', (req, res) => {
    console.log(`add article from form`);
    const { artist, title, year, description, price, promotionText, promotionImage, image, available, delivery, spotify, shoppingcart } = req.body;
    shopArticle.create({
        artist: artist,
        title: title,
        year: year,
        description: description,
        price: price,
        promotionText: promotionText,
        promotionImage: promotionImage,
        image: image,
        available: available,
        delivery: delivery,
        spotify: spotify,
        shoppingcart: shoppingcart
    })
        .then(article => {
            console.log(`${article.title} added`);
            res.redirect("/maintainShopList")
        })
        .catch(err => {
            res.redirect("/maintainShopList")
            console.log(err)
        })
});

module.exports = router;