require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
var helpers = require('handlebars-helpers')(); // William diddit for formatting dates

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://localhost/PROJECT-Jan-Hirte`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Jan Hirte';

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 60},
  saveUninitialized: false,
  resave: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 1000 * 60 * 60 * 60
  })
})
)




// ============================================================
// ROUTES
const auth = require('./routes/auth');
app.use('/', auth);

const index = require('./routes/index');
app.use('/', index);

const maintGig = require('./routes/maintGig');
app.use('/', maintGig);

const maintNews = require('./routes/maintNews');
app.use('/', maintNews);

const maintProject = require('./routes/maintProject');
app.use('/', maintProject);

const maintShopArticles = require('./routes/maintShopArticles');
app.use('/', maintShopArticles);

const maintNavigation = require('./routes/maintNavigation');
app.use('/', maintNavigation);

// const shop = require('./routes/shop');
// app.use('/', shop);

// ============================================================




module.exports = app;
