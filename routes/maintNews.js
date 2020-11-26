// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const News = require('../models/News');


router.get('/news/:id/delete', (req, res) => {
    console.log(`delete news item`);
    News.findByIdAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/maintainNewsList')
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/news/:id/edit', (req, res) => {
    console.log('open/news edit form')
    
    News.findById(req.params.id)
    .then(news => {
        console.log(news);
            res.render('maintenance/news/editNews', { news, status: "edit" });
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/news/:id/edit', (req, res) => {
    console.log('update/news based on edit form');
    const { title, text } = req.body;
    News.findByIdAndUpdate(req.params.id, {
        title: title,
        text: text,
        // image: image,
        // link: [{ url: url, linkText: linkText }]
    })
    .then (article => {
        console.log(`article added`);
        res.redirect("/maintainNewsList")
        
    })
});

router.get('/news/add/', (req, res) => {
    res.render("maintenance/news/editNews")
});

router.post('/news/add', (req, res, next) => {
    //create new/news based on form
    const { title, text, image, url, linktext, } = req.body;
    // console.log("got this title" , title);
    News.create({ title: title, text: text, image: image, link: [{ url: url, linktext: linktext }] }).then(() => {
        // res.render('news')})
        res.redirect('/maintainNewsList')
    });
});


module.exports = router;