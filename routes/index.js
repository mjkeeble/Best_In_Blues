const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const Gig = require('../models/Gig');
const News = require('../models/News');
const Project = require('../models/Project');
const ShopArticle = require('../models/ShopArticle');
const moment = require('moment');



/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/shop', (req, res, next) => {
  console.log(`calling shop`);
  ShopArticle.find().sort({ year: 'desc' })
    .then(article => {
      res.render('shop/shopArticles', { article: article });
    })
    .catch(err =>
      console.log(`Error while getting articles:`, err));
});

router.get('/projects', (req, res, next) => {
  Project.find({ display: true }).sort({ name: 1 })
    .then(project => {
      console.log(Project);
      res.render('projects', { project });
    })
    .catch(err =>
      console.log(`Error while getting projects:`, err));
});

router.get('/gigs', (req, res, next) => {
  console.log(`****  calling gigs page`);
  let today = new Date()
  Gig.find({ date: { $gte: (today) } }).sort({ date: 'asc' })
    .then(gig => {
      console.log(gig);
      gig.forEach(event => {
        if (event.date) event.place = moment(event.date).format("YYYY-MM-DD")
      })
console.log(gig);

      res.render('gigs', { gig });
    })
    .catch(err =>
      console.log(`Error while getting gigs:`, err));
});

router.get('/news', (req, res, next) => {
  console.log(`calling news page`);
  News.find().sort({updated_at: 'desc'})
    .then(news => {
      res.render('news', { news });
    })
    .catch(err =>
      console.log(`Error while getting articles:`, err));
});

router.get('/lessons', (req, res, next) => {
  res.render('lessons');
});


// router.get('/contact', loginCheck(), (req, res, next) => {
//   res.render('contact');
// });

router.get('/contact', (req, res, next) => {

  res.render('contact');
});


// router.post('/contact', (req, res, next) => {
 

//   Email.send({ // Trying email sender - William
//     SecureToken : "50684a98-6b54-4631-9d4d-4f12437dd8b1",
//     To : 'me@williamcmapbell.ie',
//     From : "hirte@website.test",
//     Subject : "This is the subject",
//     Body : "And this is the body"
//   }).then(
//     message => alert("the message has been sent")
//     );
    
    
// });

module.exports = router;
