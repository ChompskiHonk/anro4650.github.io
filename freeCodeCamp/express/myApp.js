var express = require('express');
var app = express();
console.log("Hello World");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function(req, res){
 res.send(__dirname + "/public/index.html");
});

































 module.exports = app;
