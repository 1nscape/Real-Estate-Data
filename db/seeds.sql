INSERT INTO users (first_name, last_name, email_address, phone_number, is_buyer)
VALUES ("The", "Realest", "tr@doe.com", 00001, true),
       ("Still", "Real", "sr@doe.com", 00002, false),
       ("No", "Fakes", "nf@doe.com", 00003, true),
       ("Too", "True", "tt@doe.com", 00004, false);
       
INSERT INTO houses (number_of_rooms, number_of_bathrooms, property_type, details, additional_info, userID)
VALUES (2, 2, "Duplex", "The realest property ever!!!", "Additonally real !!", 1),
       (1, 1, "Apartment", "No fake properties here !!!", "Additonally real !!",3),
       (3, 2, "Biggest House ", "The realest property ever!!!", "Additonally real !!", 1);