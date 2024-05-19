const express = require('express');
const app = express();
const orderRouter = require('./routes/createOrder');
const mailRouter = require('./routes/mailRoutes');
const AppError = require('./utils/appError');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  next();
});

app.use(express.static(__dirname + '/js'));

app.set('view engine', 'jade');

// //Do something when you're landing on the first page
app.get('/', function (req, res) {
  //render the index.jade file - input forms for humans
  res.render('index', function (err, html) {
    if (err) {
      console.log(err);
    } else {
      //no error, so send the html to the browser
      res.send(html);
    }
  });
});

app.use('/api/v1/order', orderRouter);
app.use('/', mailRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
});
app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

module.exports = app;
