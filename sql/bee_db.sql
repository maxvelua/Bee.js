drop table bee_admin;
drop table bee_user;

CREATE TABLE bee_user(
   user_id SERIAL PRIMARY KEY,
   pass_salt TEXT NOT NULL,
   pass_hash TEXT NOT NULL,
   login TEXT NOT NULL,
   user_type INTEGER NOT NULL
);

CREATE TABLE bee_admin (
   user_id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   surname TEXT NOT NULL
);

CREATE TABLE bee_emplyoee (
   user_id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   surname TEXT NOT NULL,
   email TEXT NOT NULl
);

CREATE TABLE bee_client (
   user_id SERIAL PRIMARY KEY,
   company_name TEXT NOT NULL,
   name TEXT NOT NULL,
   surname TEXT NOT NULL,
   email TEXT NOT NULL,
   phone TEXT NOT NULL,
   company_adress TEXT NOT NULL
);


ALTER TABLE bee_admin ADD CONSTRAINT fk_bee_user FOREIGN KEY (user_id) REFERENCES bee_user(user_id);

INSERT INTO bee_user VALUES (1, 'test', 'asd', 'dsa', 1);
INSERT INTO bee_admin Values (1,'loh_test','poc_test');

select * from bee_user;
select * from bee_admin;



