var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var product2Router = require('./routes/product2');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var singleRouter = require('./routes/single');
var single2Router = require('./routes/single2');
var checkoutRouter = require('./routes/checkout');
var paymentRouter = require('./routes/payment');
var faqsRouter = require('./routes/faqs');
var helpRouter = require('./routes/help');
var privacyRouter = require('./routes/privacy');
var termsRouter = require('./routes/terms');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/product2', product2Router);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/single', singleRouter);
app.use('/single2', single2Router);
app.use('/checkout', checkoutRouter);
app.use('/payment', paymentRouter);
app.use('/faqs', faqsRouter);
app.use('/help', helpRouter);
app.use('/privacy', privacyRouter);
app.use('/terms', termsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
