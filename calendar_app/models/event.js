const db = require('../db/config');
const Location = require('./location.js')

const Event = {};

Event.findAll = () => {
  return db.query(
    `
      SELECT
        events.id,
        events.title,
        locations.title,
        locations.address,
        locations.zip,
        locations.city,
        locations.longitude,
        locations.latitude,
        events.time_start,
        events.time_end,
        events.first_reminder,
        events.second_reminder,
        events.note
      FROM events JOIN locations
      ON events.location_id = locations.id ORDER BY events.time_start ASC
    `
  );
};

Event.findById = id => {
  return db.oneOrNone(
    `
      SELECT
        events.id,
        events.title,
        locations.title,
        locations.address,
        locations.zip,
        locations.city,
        locations.longitude,
        locations.latitude,
        events.time_start,
        events.time_end,
        events.first_reminder,
        events.second_reminder,
        events.note
      FROM events JOIN locations
      ON events.location_id = locations.id WHERE events.id = $1
    `, [id]
  );
};

Event.create = event => {
  let response;
  let eventPromise;
  let locationPromise = Location.create({
    title: event.location_title,
    address: event.location_address,
    zip: event.location_zip,
    city: event.location_city,
    longitude: event.location_longitude,
    latitude: event.location_latitude
  });
  locationPromise.then(location => {
    eventPromise = db.one(
      `
        INSERT INTO events
        (
          title,
          location_id,
          time_start,
          time_end,
          first_reminder,
          second_reminder,
          note
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
      `,
      [ event.title,
        location.id,
        event.time_start,
        event.time_end,
        event.first_reminder,
        event.second_reminder,
        event.note ]
    );
  });
  Promise.all([locationPromise, eventPromise]).then(values => {
    console.log(values);
    response = values;
  });
  return response;
};

Event.update = (event, id) => {
  let response;
  let eventPromise;
  let locationPromise = 
  db.one(
    `
      UPDATE quotes SET
        title = $1,
        location_id = $2,
        time_start = $3,
        time_end = $4,
        first_reminder = $5,
        seconde_reminder = $6,
        note = $7
      WHERE id = $8
      RETURNING *
    `,
    [ event.title,
      event.location_id,
      event.time_start,
      event.time_end,
      event.first_reminder,
      event.second_reminder,
      event.note,
      id ]
  );
};

Event.destroy = id => {
  return db.none(
    `
      DELETE FROM events
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Event;
