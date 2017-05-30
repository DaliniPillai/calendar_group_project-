const Event = require('../models/event');
const Location = require('../models/event');
const locationsControl = require('./locationsController');

const eventsController = {};

eventsController.index = (req, res) => {
  Event.findAll()
    .then(events => {
      res.json({ message: 'ok',
        eventsData: events,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

eventsController.show = (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      res.json({
        message: 'ok',
        event: event,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

eventsController.create = (req, res) => {
  console.log(req);
  Event.create({
      event_title: req.body.event_title,
      location_id: req.body.location_id,
      time_start: req.body.time_start,
      time_end: req.body.time_end,
      note: req.body.note,
      first_reminder: req.body.first_reminder,
      second_reminder: req.body.second_reminder
    })
    .then(event => {
      res.json({message: 'ok', event: event});
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

eventsController.edit = (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      console.log(event);
      res.json({
        message: 'ok',
        event: event,
        id: req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

eventsController.update = (req, res) => {
  Event.update({
      event_title: req.body.event_title,
      location_id: req.body.location_id,
      time_start: req.body.time_start,
      time_end: req.body.time_end,
      note: req.body.note,
      first_reminder: req.body.first_reminder,
      second_reminder: req.body.second_reminder
    }, req.params.id)
    .then(event => {
      res.json({message: 'ok', event: event});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

eventsController.destroy = (req, res) => {
  Event.destroy(req.params.id)
    .then(() => {
      res.json({message: 'event deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = eventsController;