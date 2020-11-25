// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router  = express.Router(); 
const Admin = require('../models/Admin');
const News = require('../models/News');

const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user){
            next();
        } else {
            res.redirect('/webmaster')
        }
    }
  }

//router.get('/news/delete/:id', (req, res) => {
    //delete an/news
// });

//router.get('/news/edit/:id', (req, res) => {
    //open/news edit form
// });

//router.post('/news/edit/:id', (req, res) => {
    //update/news based on edit form
// });

//router.get('/news/add/', (req, res) => {
    //open/news add form
// });

router.post('/maintainNewsAdd', (req, res, next) => {
    //create new/news based on form
    const { title, text, image, url, linktext,} = req.body;
    // console.log("got this title" , title);
    News.create({ title: title, text: text, image: image, link:[{url: url, linktext: linktext}]  }).then(() =>{
        // res.render('news')})
        res.redirect('/news')
    });
});
        

module.exports = router;