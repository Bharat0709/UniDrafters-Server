const express = require('express');
const mailController = require('../controllers/mailController');
const Router = express.Router();

Router.post('/submit/seller/:mail', mailController.sendMailtoSeller);
Router.post('/submit/buyer/:mail', mailController.sendMailtoBuyer);
Router.post('/submit/admin/:mail', mailController.sendMailtoAdmin);

module.exports = Router;
