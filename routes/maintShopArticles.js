// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const shopArticle = require('../models/ShopArticle');



router.get('/shopArticle/:id/delete', (req, res) => {
    console.log(`delete shop article`);
    console.log(req.body);

    let r = window.confirm(`Sie sind gerade dabei \n${req.body.artist} - ${req.body.title} zu löschen.\n Clicken Sie OK zu bestätigen.`)
    if (r) {
    shopArticle.findByIdAndRemove({ _id: req.params.id })
        .then(() => {
            window.alert("Artikel wurde gelöscht")
            res.redirect('/maintainShopList')
        })
        .catch(err => {
            console.log(err);
        })
    }

});

router.get('/shopArticle/:id/edit?', (req, res) => {
    console.log(`shop edit called`);
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

//router.post('/shopArticle/edit/:id', (req, res) => {
//update/shopArticle based on edit form
// });

router.get('/shopArticle/add/', (req, res) => {
    console.log(`open add article form`);
    console.log(req.params);
    res.render("maintenance/shopArticles/editShopArticle");
})

//router.post('/shopArticle/add/', (req, res) => {
//create new/shopArticle based on form
// });



module.exports = router;