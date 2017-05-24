const express = require('express');
const locationsController = require('../controllers/locationsController');

const locationRoutes = express.Router();

locationRoutes.get('/', locationsController.index);
locationRoutes.get('/:id', locationsController.show);
locationRoutes.post('/', locationsController.create);
locationRoutes.delete('/:id', locationsController.destroy);

module.exports = locationRoutes;
