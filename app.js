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