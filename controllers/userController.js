var User = require('../models/user');
var Product = require('../models/product');

function not_includ(arr, obj){
  if (arr.indexOf(obj) == -1)
    return true;
  else{
    return false;
  }
}

const { body, check, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.user_detail = function(req, res){
  res.send('Not implemented: User detail: '+ req.params.uname);
};

exports.user_create_get = function(req, res) {
  res.send('Not implemented: User create GET');
};

exports.user_create_post = [
  check('terms').equals('true').withMessage('Please accept terms and conditions to continue'),
  body('name', 'Name should be at least 3 letters').isLength({ min: 3 }).trim(),
  body('email', 'Please enter a valid email').isEmail().normalizeEmail(),
  check('psw').isLength({ min: 6, max: 20}).withMessage('Password must contain between 6 and 20 characters')
  .matches(/\d/).withMessage('Password must contain a number'),
  sanitizeBody('name').trim().escape(),
  sanitizeBody('email').trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    var user = new User(
        { name: req.body.name,
          email: req.body.email,
          psw: req.body.psw }
      );
    if (!errors.isEmpty()) {
      return res.render('signupform', {errors: errors.array()});
    } else {
      User.findOne({ 'email': req.body.email })
      .exec( function(err, found_user ){
        if (err) {return next(err); }

        if (found_user) {
          res.render('signupform', {errors: [{msg: 'This email is already registered. Please login'}]});
        } else {
          user.save(function (err) {
            if (err) {
              res.send(err);
            }
            res.render('index', {logged_in: true});
          });
        }
      });
    }
  }
];

exports.user_login_post = [
  body('email', 'Please enter a valid email').isEmail().normalizeEmail(),
  check('psw').isLength({ min: 6, max: 20}).withMessage('Please enter a valid password'),
  sanitizeBody('email').trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('loginform', {errors: errors.array()});
      return;
    } else {
      User.findOne({ 'email': req.body.email })
      .exec( function(err, found_user ){
        if (err) { return next(err); }
        if (found_user) {
          if (found_user.psw === req.body.psw){
            res.render(req.params.page, {logged_in: true, email: found_user.email});
          } else {
            res.render('loginform', {errors: [{msg: 'Invalid credentials!'}]})
          }
        } else {
          res.render('loginform', {errors: [{msg: 'No such user found! Please register'}]})
            }
        });
      }
  }
];

exports.cartdisplay = function(req,res, next) {
  User.findOne({ 'email': req.body.email })
  .exec( function(err, found_user){
    if (err){
      res.render('index');
    }
    if (found_user) {
      var cart_arr = found_user.cart;
      var username = found_user.name;
      if (cart_arr.length){
        res.render('cartpage', {logged_in: true, cart: cart_arr, user: username})
      }
      else{
        res.render('cartpage', {logged_in: true, user: username})
      }
    } else {
      res.render('index', {logged_in: false})
    }
  })
}

exports.user_add_cart = function(req,res, next) {
  User.findOne({ 'email': req.body.email })
  .exec( function(err, found_user){
    if (err){
      res.render('index');
    }
    if (found_user) {
      var cart_arr = [];
      if (not_includ(found_user.cart, req.body.prodid)){
        found_user.cart.push(req.body.prodid);
      }
      found_user.save(function(err){
        if (err){
          res.send(err);
        }
        found_user.cart.forEach(function(item){
          Product.findOne({prodid: item})
          .exec( function(err, found){
            if (err) { return res.render('index2', {logged_in: false}) }
            var found_prod = found.toObject();
            console.log('found_prod');
            console.log(found_prod);
            cart_arr.push({
              imgurl: found_prod.url,
              prodname: found_prod.name,
              prodprice: found_prod.price
            });
            console.log('pushed');
            console.log(cart_arr);
        });
        });
        console.log('data');
        console.log(cart_arr);
      })
      .then(res.render('cart',
          {
            name: found_user.name,
            data: cart_arr
          })
      ).catch((err)=>{console.log('errrr')})
    }
  });
}

exports.user_delete_get = function(req, res) {
  res.send('Not implemented: User delete Get');
};

exports.user_delete_post = function(req, res) {
  res.send('Not implemented: User delete POST');
};

exports.user_update_get = function(req, res) {
  res.send('Not implemente: User update Get');
};

exports.user_update_post = function(req, res) {
  res.send('Not implemented: User update POST');
};
