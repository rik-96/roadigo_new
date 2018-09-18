var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

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

module.exports = router;
