var express = require('express');
var app = express();
console.log("Hello World");
app.get("/", function(req, res){
 res.send(__dirname + "/public/index.html");
});

































 module.exports = app;
