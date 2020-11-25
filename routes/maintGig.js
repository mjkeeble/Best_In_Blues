// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router  = express.Router();
const Admin = require('../models/Admin');
const Gig = require('../models/Gig');


//router.get('/gig/delete/:id', (req, res) => {
    //delete an gig
// });

//router.get('/gig/edit/:id', (req, res) => {
    //open gig edit form
// });

//router.post('/gig/edit/:id', (req, res) => {
    //update gig based on edit form
// });

//router.get('/gig/add/', (req, res) => {
    //open gig add form
// });

//router.post('/gig/add/', (req, res) => {
    //create new gig based on form 
// });



router.post('/maintainGigsAdd',  (req, res, next) => {
    //create new/news based on form
    const { date, enddate, town, venue, status, comment } = req.body;
    // console.log("got this title" , title);
    Gig.create({ date: date, enddate: enddate, town: town, venue: venue, status: status, comment: comment }).then(() =>{
        // res.render('news')})
        res.redirect('/gigs')
    });
});
        




module.exports = router;