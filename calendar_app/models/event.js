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
        events.note
      FROM events JOIN locations
      ON events.location_id = locations.id WHERE events.id = $1
    `, [id]
  );
};

Event.create = event => {
  Location.create({
    title: event.location_title,
    address: event.location_address,
    zip: event.location_zip,
    city: event.location_city,
    longitude: event.location_longitude,
    latitude: event.location_latitude
  })
  .then(location => {
    db.one(
      `
        INSERT INTO events
        (
          title,
          location_id,
          time_start,
          time_end,
          note
        )
        VALUES ($1, $2, $3, $4, $5) RETURNING *
      `,
      [ event.title,
        location.id,
        event.time_start,
        event.time_end,
        event.note ]
    );

  });
// CREATE TABLE IF NOT EXISTS locations (
//   id BIGSERIAL PRIMARY KEY,
//   user_id INTEGER REFERENCES users(id),
//   title VARCHAR(255),
//   address VARCHAR(255),
//   zip INTEGER,
//   city VARCHAR(255),
//   longitude DECIMAL(9,6),
//   latitude DECIMAL(9,6)
// );
};

Event.update = (event, id) => {
  return db.one(
    `
      UPDATE quotes SET
        title = $1,
        location_id = $2,
        time_start = $3,
        time_end = $4,
        note = $5
      WHERE id = $6
      RETURNING *
    `,
    [ event.title,
      event.location_id,
      event.time_start,
      event.time_end,
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
