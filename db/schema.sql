DROP DATABASE IF EXISTS realEstate_db;
CREATE DATABASE realEstate_db;

USE realEstate_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_Name VARCHAR(30) NOT NULL,
  last_Name VARCHAR(30) NOT NULL,
  email_address VARCHAR(30) NOT NULL,
  user_password VARCHAR(30)
);

CREATE TABLE houses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  number_of_rooms INT NOT NULL,
  number_of_bathrooms INT NOT NULL,
  property_type VARCHAR(30),
  list_price INT,
  primary_photo VARCHAR(500)  
);

CREATE TABLE favourites (
  user_id INT,
  house_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (house_id) REFERENCES houses(id)

);