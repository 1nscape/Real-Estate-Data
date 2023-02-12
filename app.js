const express = require("express");
const bodyParser = require("body-parser");
let city = "";
let mPrice, mxPrice = 0;
let url = "";
let photos = [];
let listPrice, bathrooms, bedrooms = 0;
let type, address, primaryPhoto = "";