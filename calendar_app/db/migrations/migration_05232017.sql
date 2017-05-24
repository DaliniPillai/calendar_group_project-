\connect dri_cal_development

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS locations (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255),
  address VARCHAR(255),
  zip INTEGER,
  city VARCHAR(255),
  longitude DECIMAL(9,6),
  latitude DECIMAL(9,6)
);

CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255),
  location_id INTEGER REFERENCES locations(id),
  time_start BIGINT,
  time_end BIGINT,
  note VARCHAR(1024)
);