// var figlet = require("figlet"); // this method is called commonjs method
// import figlet from "figlet"; // this one is called module method

// figlet("Hello AITAM Students!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// var randomColor = require('randomcolor'); // import the script
import randomColor from "randomcolor";
var color = randomColor();
console.log(color);