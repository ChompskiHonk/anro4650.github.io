app.use("/public", express.static(__dirname + "/public"));
app.get("/", function(req, res){
 res.send(__dirname + "/public/index.html");
});
console.log("Hello World");
var express = require('express');
var app = express();



































 module.exports = app;
