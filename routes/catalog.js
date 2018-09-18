var express = require('express');
var router = express.Router();

// Require controller modules.
var product_controller = require('../controllers/productController');
var user_controller = require('../controllers/userController');

/// product ROUTES ///

// GET catalog home page.
router.get('/', product_controller.index);

// GET request for creating a product. NOTE This must come before routes that display product (uses id).
router.get('/product/create', product_controller.product_create_get);

// POST request for creating product.
router.post('/product/create', product_controller.product_create_post);

// GET request to delete product.
router.get('/product/:id/delete', product_controller.product_delete_get);

// POST request to delete product.
router.post('/product/:id/delete', product_controller.product_delete_post);

// GET request to update product.
router.get('/product/:id/update', product_controller.product_update_get);

// POST request to update product.
router.post('/product/:id/update', product_controller.product_update_post);

// GET request for one product.
router.get('/product/:id', product_controller.product_detail);

// GET request for list of all product items.
router.get('/products', product_controller.product_list);

/// user ROUTES ///

// GET request for creating user. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating user.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete user.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update user.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one user.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all users.
module.exports = router;