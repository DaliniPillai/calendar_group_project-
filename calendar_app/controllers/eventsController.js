const Event = require('../models/event');
const Location = require('../models/event');
const locationsControl = require('./locationsController');

eventsController.create = (req, res) => {
  console.log(req);
  Event.create({
      title: req.body.title,
      address: req.body.address,
      zip: req.body.zip,
      city: req.body.city,
      longitude: req.body.longitude,
      latitude: req.body.latitude
    })
    .then(location => {
      res.json({message: 'ok', location: location});
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

// CREATE TABLE IF NOT EXISTS events (
//   id BIGSERIAL PRIMARY KEY,
//   user_id INTEGER REFERENCES users(id),
//   title VARCHAR(255),
//   location_id INTEGER REFERENCES locations(id),
//   time_start BIGINT,
//   time_end BIGINT,
//   note VARCHAR(1024)
// );