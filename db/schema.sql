DROP DATABASE IF EXISTS realEstate_db;
CREATE DATABASE realEstate_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  First Name VARCHAR(30) NOT NULL,
  First Name VARCHAR(30) NOT NULL,
  email_address VARCHAR(30) NOT NULL,
  phone_number (INT),
  is_buyer BOOLEAN,

);

CREATE TABLE houses (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  number_of_rooms INT NOT NULL,
  number_of_bathrooms INT NOT NULL,
  property_type VARCHAR(30),
  details VARCHAR(300) NOT NULL,
  additional_info VARCHAR(300),
  userID INT,
  FOREIGN KEY (userID) REFERENCES users(id),
  ON DELETE SET NULL
);

CREATE TABLE bids (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  bid_price INT NOT NULL,
  user_id INT,
  house_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (house_id) REFERENCES houses(id),
  ON DELETE SET NULL 
);