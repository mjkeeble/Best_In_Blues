// ROUTES TO MANAGE GIG RECORDS

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Gig = require('../models/Gig');


const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/webmaster')
        }
    }
}

router.get('/gig/:id/delete', loginCheck(), (req, res) => {
    console.log(`delete gig`);
    Gig.findByIdAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/maintainGigsList')
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/gig/:id/edit', loginCheck(), (req, res) => {
    console.log(`open gig edit form`);
    Gig.findById(req.params.id)
        .then(gig => {
            console.log(gig);
            res.render("maintenance/gigs/editGig", { gig, status: 'edit' });
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/gig/:id/edit', (req, res) => {
    console.log(`edit gig from form`)
    const { date, enddate, town, venue, status, comment } = req.body;
    Gig.findByIdAndUpdate(req.params.id, {
        date: date,
        enddate: enddate,
        town: town,
        venue: venue,
        state: status,
        comment: comment
    })
        .then(gig => {
            console.log(`gig updated`);
            res.redirect('/maintainGigsList')
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/maintainGigsAdd', loginCheck(), (req, res) => {
    console.log(`open gig add form`);
    res.render("maintenance/gigs/editGig")
});

router.post('/gig/add/', (req, res) => {
    console.log(`add gig from form`)
    const { date, enddate, town, venue, status, comment } = req.body;
    Gig.create({
        date: date,
        enddate: enddate,
        town: town,
        venue: venue,
        state: status,
        comment: comment
    })
        .then(gig => {
            console.log(`gig created`);
            res.redirect('/maintainGigsList')
        })
        .catch(err => {
            console.log(err)
        })
});

router.post('/maintainGigsAdd', (req, res, next) => {
    //create new/news based on form
    const { date, enddate, town, venue, status, comment } = req.body;
    // console.log("got this title" , title);
    Gig.create({ date: date, enddate: enddate, town: town, venue: venue, status: status, comment: comment }).then(() => {
        // res.render('news')})
        res.redirect('/gigs')
    });
});


module.exports = router;