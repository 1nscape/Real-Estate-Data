// const express = require("express");
// const session = require("express-session");
// const exphbs = require("express-handlebars");
// const routes = require("./controllers");
// //TODO: Uncomment to make use of database, once set up
// //const sequelize = require('./config/connection');
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.engine("handlebars", exphbs.engine());
// app.set("view engine", "handlebars");

// app.use(express.static("public"));
// //Setup routes to the Server
// //Look at /controllers folder
// app.use("/", routes);

// //TODO: Uncomment to make use of database, once set up
// // sequelize.sync({force: false}).then(()=>{
// //     app.listen(PORT, () => {
// //         console.log(`Server is listening at http://localhost:${PORT}`)
// //     });
// // });

// app.listen(PORT, () => {
//   console.log(`Server is listening at http://localhost:${PORT}`);
// });
const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

// Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
//   item.onclick = () => {
//     item.parentElement.parentElement.classList.toggle("change");
//   };
// });

