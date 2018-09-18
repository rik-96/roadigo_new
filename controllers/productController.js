var Product = require('../models/product');

var async = require('async');

exports.index = function(req, res) {
    res.render('index2', {title: 'Local Roadigo'});
};

exports.product_list = function(req, res) {
  res.send('Not implemented: product  list');
};

exports.product_detail = function(req, res) {
  res.send('Not implemented: product  detail' + req.params.id);
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