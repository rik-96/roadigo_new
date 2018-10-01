var Product = require('../models/product');
var Category = require('../models/category');

var async = require('async');

exports.index = function(req, res) {
    res.render('index2', {title: 'Local Roadigo'});
};

exports.product_list = function(req, res) {
  res.send('Not implemented: product  list');
};

exports.storemenu = function(req, res) {
  Category.find({category: 'products'})
  .exec( function(err, found_prod){
    if (err) { return res.render('index2', {logged_in: false}) }
    if (found_prod) {
      var cat = {};
      found_prod.forEach(function(elem){
        var ele = elem.toObject();
        if (ele.subcategory in cat){
          cat[ele.subcategory].push(ele);
        } else {
          cat[ele.subcategory] = [ele];
        }
      });
      console.log(cat)
      res.render('storemenu', {data: cat})
    } else {
      res.render('index2', {logged_in: false})
    }
  })
};

exports.store = function(req, res) {
  Product.find({category: 'products'})
  .exec( function(err, found_prod){
    if (err) { return res.render('index2', {logged_in: false}) }
    if (found_prod) {
      res.render('store', {data: found_prod})
    } else {
      res.render('index2', {logged_in: false})
    }
  })
};

exports.product_detail = function(req, res) {
  Product.findOne({prodid: req.params.prodid, category: 'products'})
  .exec( function(err, found_prod){
    if (err) { return res.render('index2', {logged_in: false}) }
    if (found_prod) {
      res.render('product', {
        name: found_prod.name,
        url: found_prod.url,
        price: found_prod.price,
        details: found_prod.details
      })
    } else {
      res.render('index2', {logged_in: false})
    }
  })
};

exports.service_detail = function(req, res) {
  res.send('Not implemented: service detail');
};

exports.product_create_get = function(req, res) {
  res.send('Not implemented: product  create get');
};

exports.product_create_post = function(req, res) {
  res.send('Not implemented: product  create post');
};

exports.product_delete_get = function(req, res) {
  res.send('Not implemented: product  delete get');
};

exports.product_delete_post = function(req, res) {
  res.send('Not implemented: product  delete post');
};

exports.product_update_get = function(req, res) {
  res.send('Not implemented: product  update get');
};

exports.product_update_post = function(req, res) {
  res.send('Not implemented: product  update post');
};