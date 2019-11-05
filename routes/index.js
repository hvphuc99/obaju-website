var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/basket', function(req, res, next) {
  res.render('basket');
});

router.get('/detail', function(req, res, next) {
  res.render('detail');
});

router.post('/checkout1', function(req, res, next) {
  res.render('checkout1');
});

router.get('/checkout1', function(req, res, next) {
  res.render('checkout1');
});

router.get('/checkout1/checkout2', function(req, res, next) {
  res.render('checkout2');
});

router.get('/checkout1/checkout2/checkout3', function(req, res, next) {
  res.render('checkout3');
});

router.get('/checkout1/checkout2/checkout3/checkout4', function(req, res, next) {
  res.render('checkout4');
});

router.get('/pay-success', function(req, res, next) {
  res.render('pay-success');
});

router.get('/order-history', function(req, res, next) {
  res.render('customer-orders');
});

router.get('/category', function(req, res, next) {
  res.render('category');
});

module.exports = router;
