const express = require('express');
const orderController = require('../controllers/orderController');
const Router = express.Router();

Router.post('/createorder', orderController.createOrder);

module.exports = Router;
