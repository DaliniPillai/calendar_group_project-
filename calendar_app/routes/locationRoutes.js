const express = require('express');
const locationsController = require('../controllers/locationsController');

const locationRoutes = express.Router();

locationRoutes.get('/', locationsController.index);
locationRoutes.get('/:id', locationsController.show);

module.exports = locationRoutes;
