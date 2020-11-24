const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/shop', (req, res, next) => {
  console.log(`calling shop`);
  ShopArticle.find()
    .then(article => {
      res.render('shop/shopArticles', { article: article });
    })
    .catch(err =>
      console.log(`Error while getting articles:`, err));
});

router.get('/projects', (req, res, next) => {
  console.log(`calling projects`);
  res.render('projects');
});

router.get('/gigs', (req, res, next) => {
  res.render('gigs');
});

router.get('/news', (req, res, next) => {
  res.render('news');
});

router.get('/classes', (req, res, next) => {
  res.render('classes');
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

module.exports = router;
