const express = require("express");
const bodyParser = require("body-parser");
let city = "";
let mPrice, mxPrice = 0;
let url = "";
let photos = [];
let listPrice, bathrooms, bedrooms = 0;
let type, address, primaryPhoto = "";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f716193daemsh52abc8b143cda9ap1b8ab2jsn483a389e3326',
    'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
  }
};

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req, res){
  city =req.body.cityName;
  mPrice =req.body.minPrice;
  mxPrice =req.body.maxPrice
  // console.log(`${city} is the choosen city, ${mPrice} is min Price, ${mxPrice} --> you know what it is! `)

url = `https://realtor16.p.rapidapi.com/forsale?location=${city}&list_price-min=${mPrice}&list_price-max=${mxPrice}`;

getData();
});

async function getData() {
  console.log(url);
    let response = await fetch(url, options)
        let data = await response.json();
        let propertyData = data.home_search.results;
        for (var i in propertyData){
          bathrooms = propertyData[i].description.baths;
          bedrooms = propertyData[i].description.beds; 
          type = propertyData[i].description.type;
          listPrice = propertyData[i].list_price;
          primaryPhoto = propertyData[i].primary_photo.href;
          //address = propertyData[i].location.address.coordinate.line;
        
          createData(bedrooms, bathrooms, type, listPrice, primaryPhoto);

        console.log("bathrooms: " + bathrooms + " /n Bedrooms" + bedrooms + " Photo: " + primaryPhoto);

        }      
        
        
}


app.listen(3000, function(){
  console.log("Server is running on port 3000")
})

const {createPool} = require('mysql')

const pool = createPool({
  host: "localhost",
  user: "root",
  password : "root",
  database: "realEstate_db",
})

function createData(bedrooms, bathrooms, type, listPrice, primaryPhoto){
  // let sql = 'INSERT INTO houses (number_of_rooms, number_of_bathrooms, property_type, list_price, primary_photo) values ?'
  let sql = 'INSERT INTO houses SET ?'

  const values = {number_of_rooms: bedrooms, number_of_bathrooms: bathrooms, property_type: type, list_price: listPrice, primary_photo: primaryPhoto}  

  pool.query(sql, values, function(err, result){
      if(bedrooms && bathrooms) {
      if (err) throw err;
  
      console.log("Data Uploaded");
  
    }
  });
}

