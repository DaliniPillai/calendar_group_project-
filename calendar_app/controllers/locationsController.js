const Location = require('../models/location');

const locationsController = {};

locationsController.index = (req, res) => {
  Location.findAll()
    .then(locations => {
      res.json({ message: 'ok',
        locationsData: locations,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({message: '400', err});
    });
};

locationsController.show = (req, res) => {
  Location.findById(req.params.id)
    .then(location => {
      res.json({
        message: 'ok',
        quote: location,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

locationsController.create = (req, res) => {
  console.log(req);
  Location.create({
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

locationsController.destroy = (req, res) => {
  Location.destroy(req.params.id)
    .then(() => {
      res.json({message: 'location deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = locationsController;

