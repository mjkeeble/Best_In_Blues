const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');


router.get('/webmaster', (req, res, next) => {
    res.render('maintenance/adminLogin');
});

router.get('/adminMenu', (req, res, next) => {
    console.log(`calling adminMenu`);
    res.render('maintenance/adminMenu');
});

router.get('/maintainAdminsAdd', (req, res, next) => {
res.render(`maintenance/admins/addAdmin`)
});

router.get('/maintainAdminsList', (req, res, next) => {

});

router.get('/maintainNewsAdd', (req, res, next) => {
res.render(`maintenance/news/addNews`)
});

router.get('/maintainNewsList', (req, res, next) => {

});

router.get('/maintainGigsAdd', (req, res, next) => {
res.render(`maintenance/gigs/addGig`)
});

router.get('maintainGigsList', (req, res, next) => {

});

router.get('/maintianProjectsAdd', (req, res, next) => {
res.render(`maintenance/projects/addProject`)
});

router.get('/maintainProjectsList', (req, res, next) => {

});

router.get('/maintainShopAdd', (req, res, next) => {
res.render(`maintenance/shopArticles/addShopArticle`)
});

router.get('/maintainShopList', (req, res, next) => {

});

module.exports = router;