const express = require('express');
const eventsController = require('../controllers/eventsController');

const eventRoutes = express.Router();

eventRoutes.get('/', eventsController.index);
eventRoutes.get('/:id', eventsController.show);
eventRoutes.post('/', eventsController.create);
eventRoutes.put('/:id', eventsController.update);
eventRoutes.delete('/:id', eventsController.destroy);

module.exports = eventRoutes;