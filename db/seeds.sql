INSERT INTO users (first_name, last_name, email_address, user_password)
VALUES ("The", "Realest", "tr@doe.com", "The_unhackable"),
       ("Still", "Real", "sr@doe.com", "The_Most_unhackable"),
       ("No", "Fakes", "nf@doe.com", "never_been_hacked"),
       ("Too", "True", "tt@doe.com", "Still_unhacked");
       
INSERT INTO houses (number_of_rooms, number_of_bathrooms, property_type, list_price, primary_photo)
VALUES (2, 2, "Duplex", 1000, "https://ap.rdcpix.com/1f589051512f8ab37b23e9b1629827c3l-m683537650s.jpg" ),
       (1, 3, "Apartment", 11000, "https://ap.rdcpix.com/9b995fd30fef1d1e91d98d832ab3ca84l-m2084304574s.jpg"),
       (2, 2, "House", 120000, "https://ap.rdcpix.com/8fe056bfe2feddd0777694b664920ed6l-m644180916s.jpg");

INSERT INTO favourites (user_id, house_id)
VALUES(1, 1),
      (2, 3),
      (4, 2);