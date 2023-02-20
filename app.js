// This is the main body of the application all setup and config is started here

require('dotenv').config(); // set up to use ENV file
const path = require('path'); // Set up path 

// load the express and express-handlebars modules
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session'); // Import express-session module 
const routes = require('./controllers'); // require for all Express routes

// const bodyParser = require("body-parser");
// let city = "";
// let mPrice, mxPrice = 0;
// let url = "";
// let photos = [];
// let listPrice, bathrooms, bedrooms = 0;
// let type, address, primaryPhoto = "";

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sequelize setup for session data storage
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection'); // set up connection for Sequelize

// Set up session storage with Sequelize
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds 
    // (86400000 ms === 1 day)
    // (3600000 ms === 1 hour)
    maxAge: 3600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

// Create 'Express-Handlebars' instance with a default layout
const hbs = exphbs.create({});
// Register `hbs` as our view engine using its bound 'engine()' function
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// register a custom helper for express-handlebars here
const handlebars = require('handlebars');
// this custom Handlebars helper returns a JQuery library string for special Date formatting
handlebars.registerHelper('format_date', function(date) {
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  return `${month}/${day}/${year}`;
});

// set up all Express built-in middleware methods here
// 'express.urlencoded([options])' is a built-in middleware function in Express
// It parses incoming requests with urlencoded payloads and is based on 'body-parser'
app.use(express.urlencoded({ extended: true }));

// 'express.json([options])' is a built-in middleware function in Express
// It parses incoming requests with JSON payloads and is based on 'body-parser'
app.use(express.json());

// sets 'static' routes for Express here
// 'express.static(root, [options])' is a built-in middleware function in Express
// It serves static files and is based on 'serve-static'
app.use(express.static(path.join(__dirname, 'public')));

// more Express route setup here
app.use(require('./controllers/homeRoutes'));
app.use(routes);

// app.use(bodyParser.urlencoded({extended: true}));

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'f716193daemsh52abc8b143cda9ap1b8ab2jsn483a389e3326',
//     'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
//   }
// };

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html")
// })

// app.post("/",function(req, res){
//   city =req.body.cityName;
//   mPrice =req.body.minPrice;
//   mxPrice =req.body.maxPrice
//   // console.log(`${city} is the choosen city, ${mPrice} is min Price, ${mxPrice} --> you know what it is! `)

// url = `https://realtor16.p.rapidapi.com/forsale?location=${city}&list_price-min=${mPrice}&list_price-max=${mxPrice}`;

// getData();
// });

// async function getData() {
//   console.log(url);
//     let response = await fetch(url, options)
//         let data = await response.json();
//         let propertyData = data.home_search.results;
//         for (var i in propertyData){
//           bathrooms = propertyData[i].description.baths;
//           bedrooms = propertyData[i].description.beds; 
//           type = propertyData[i].description.type;
//           listPrice = propertyData[i].list_price;
//           primaryPhoto = propertyData[i].primary_photo.href;
//           //address = propertyData[i].location.address.coordinate.line;      
//           createData(bedrooms, bathrooms, type, listPrice, primaryPhoto);

//         console.log("bathrooms: " + bathrooms + " /n Bedrooms" + bedrooms + " Photo: " + primaryPhoto);
//         }            
// }

// const {createPool} = require('mysql')
// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password : "root",
//   database: "realEstate_db",
// })

// function createData(bedrooms, bathrooms, type, listPrice, primaryPhoto){
//   // let sql = 'INSERT INTO houses (number_of_rooms, number_of_bathrooms, property_type, list_price, primary_photo) values ?'
//   let sql = 'INSERT INTO houses SET ?'

//   const values = {number_of_rooms: bedrooms, number_of_bathrooms: bathrooms, property_type: type, list_price: listPrice, primary_photo: primaryPhoto}  

//   pool.query(sql, values, function(err, result){
//       if(bedrooms && bathrooms) {
//       if (err) throw err;
  
//       console.log("Data Uploaded");
//     }
//   });
// }

// start up the application and open the PORT listener
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});