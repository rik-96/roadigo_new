var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var product_controller = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {logged_in: false});
});

router.get('/error', function(req, res) {
  res.render('err_page');
});

router.get('/logout', function(req, res) {
  res.render('index', {logged_in: false});
})

router.get('/stores', function(req, res) {
  res.render('example', {logged_in: false});
})

router.get('/loginform/:page', function(req, res) {
  page = req.params.page;
  res.render('loginform', {page: page});
});

router.get('/signupform', function(req, res) {
  res.render('signupform');
});

router.post('/storemenu', product_controller.storemenu);

router.post('/cartdisplay', user_controller.cartdisplay);

router.post('/store', product_controller.store);

router.post('/login/:page', user_controller.user_login_post);

router.post('/signup', user_controller.user_create_post);

router.post('/cart', user_controller.user_add_cart);

router.post('/product/:prodid', product_controller.product_detail);

router.get('/service/:servid', product_controller.service_detail);

module.exports = router;
