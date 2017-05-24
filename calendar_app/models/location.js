const db = require('../db/config');

const Location = {};

Location.findAll = () => {
  return db.query(`SELECT * from locations ORDER BY title ASC`);
};

Location.findById = id => {
  return db.oneOrNone(`SELECT * from locations WHERE id = $1`, [id]);
};

Location.create = location => {
  return db.one(
    `
      INSERT INTO locations
      (
        title,
        address,
        zip,
        city,
        longitude,
        latitude
      )
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `,
    [ location.title,
      location.address,
      location.zip,
      location.city,
      location.longitude,
      location.latitude ]
  );
};

Location.update = (location, id) => {
  return db.one(
    `
      UPDATE locations SET
        title = $1,
        address = $2,
        zip = $3,
        city = $4,
        longitude = $5,
        latitude = $6,
      WHERE id = $7
      RETURNING *
    `,
    [ location.title,
      location.address,
      location.zip,
      location.city,
      location.longitude,
      location.latitude,
      id ]
  );
};

Location.destroy = id => {
  return db.none(
    `
      DELETE FROM locations
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Location;
