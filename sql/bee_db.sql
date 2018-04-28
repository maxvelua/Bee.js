DROP TABLE IF EXISTS bee_admin;
DROP TABLE IF EXISTS bee_employee;
DROP TABLE IF EXISTS bee_client;
DROP TABLE IF EXISTS bee_user;

CREATE TABLE bee_user (
  user_id   SERIAL PRIMARY KEY,
  pass_salt TEXT    NOT NULL,
  pass_hash TEXT    NOT NULL,
  login     TEXT    NOT NULL UNIQUE,
  email     TEXT    NOT NULL UNIQUE,
  is_email_confirmed BOOL DEFAULT FALSE,
  user_type INTEGER NOT NULL
);

CREATE TABLE bee_admin (
  user_id INTEGER REFERENCES bee_user (user_id),
  name    TEXT NOT NULL,
  surname TEXT NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE bee_employee (
  user_id INTEGER REFERENCES bee_user (user_id),
  name    TEXT NOT NULL,
  surname TEXT NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE bee_client (
  user_id        INTEGER REFERENCES bee_user (user_id),
  name           TEXT NOT NULL,
  surname        TEXT NOT NULL,
  company_name   TEXT NOT NULL,
  company_address TEXT NOT NULL,
  phone          TEXT NOT NULL,
  PRIMARY KEY (user_id)
);

SELECT *
FROM bee_user;
SELECT *
FROM bee_admin;
SELECT *
FROM bee_employee;
SELECT *
FROM bee_client;

UPDATE bee_user SET is_email_confirmed = TRUE;
