var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var product_controller = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index2', {logged_in: false});
});

router.get('/logout', function(req, res) {
  res.render('index2', {logged_in: false});
})

router.get('/loginform', function(req, res) {
  res.render('loginform');
});

router.get('/signupform', function(req, res) {
  res.render('signupform');
});

router.post('/login', user_controller.user_login_post);

router.post('/signup', user_controller.user_create_post);

router.get('/product/:prodid', product_controller.product_detail);

router.get('/service/:servid', product_controller.service_detail);

module.exports = router;
