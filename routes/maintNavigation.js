const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const Gig = require('../models/Gig');
const News = require('../models/News');
const Project = require('../models/Project');
const ShopArticle = require('../models/ShopArticle');


router.get('/webmaster', (req, res, next) => {
    res.render('maintenance/adminLogin');
});

router.get('/logout', (req, res, next)=>{
    // terminate session
    res.redirect('/webmaster')
})

router.get('/adminMenu', (req, res, next) => {
    console.log(`calling adminMenu`);
    res.render('maintenance/adminMenu');
});

router.get('/maintainAdminsAdd', (req, res, next) => {
res.render(`maintenance/admins/addAdmin`)
});

router.get('/maintainAdminsList', (req, res, next) => {
console.log(`calling admin list`);
Admin.find().sort({adminName: 'asc'})
.then(admin => {
    res.render('maintenance/admins/viewAdmins', { admin })
})
.catch(err =>
    console.log(`Error while getting admins:`, err));
});

router.get('/maintainNewsAdd', (req, res, next) => {
res.render(`maintenance/news/addNews`)
});

router.get('/maintainNewsList', (req, res, next) => {
    console.log(`calling news list`);
    News.find().sort({updated_at: 'desc'})
    .then(news => {
        res.render('maintenance/news/viewNews', { news })
    })
    .catch(err =>
        console.log(`Error while getting admins:`, err));
});

router.get('/maintainGigsAdd', (req, res, next) => {
res.render(`maintenance/gigs/addGig`)
});

router.get('/maintainGigsList', (req, res, next) => {
    console.log(`calling gig list`);
    Gig.find().sort({date: 'desc'})
    .then(gig => {
        res.render('maintenance/gigs/viewGigs', { gig })
    })
    .catch(err =>
        console.log(`Error while getting gigs:`, err));
});

router.get('/maintianProjectsAdd', (req, res, next) => {
res.render(`maintenance/projects/addProject`)
});

router.get('/maintainProjectsList', (req, res, next) => {
    console.log(`calling project list`);
    Project.find().sort({name: 'asc'})
    .then(project => {
        res.render('maintenance/projects/viewProjects', { project })
    })
    .catch(err =>
        console.log(`Error while getting projects:`, err));
});

router.get('/maintainShopAdd', (req, res, next) => {
res.render(`maintenance/shopArticles/addShopArticle`)
});

router.get('/maintainShopList', (req, res, next) => {
    console.log(`calling shop article list`);
    ShopArticle.find().sort({year: 'desc'})
    .then(shopArticle => {
        res.render('maintenance/shopArticles/viewshopArticles', { shopArticle })
    })
    .catch(err =>
        console.log(`Error while getting shopArticles:`, err));
});

module.exports = router;