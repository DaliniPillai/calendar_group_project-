\c dri_cal_development

INSERT INTO locations (location_title, address, zip, city) VALUES
  ('General Assembly', '10 E 21st St', 18235, 'New York'),
  ('Key Food', '130 7th Ave', 11215, 'Brooklyn'),
  ('Psych Office', '928 Broadway', 18235, 'Austin'),
  ('Chipotle', '1000 Elk Street', 37027, 'Brentwood');

INSERT INTO events (event_title, location_id, time_start, time_end) VALUES
  ('Go to Class', 1, 1495893600000, 1495897200000),
  ('Run to the store', 2, 1495965600000, 1495972800000),
  ('Meet Therapist', 3, 1496318400000, 1496322000000),
  ('Grab a bite', 4, 1496505600000, 1496512800000);