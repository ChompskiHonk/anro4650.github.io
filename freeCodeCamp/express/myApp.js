var bodyParser = require("body-parser");
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function logger (req, res, next){
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})
app.use("/public", express.static(__dirname + "/public"));
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});
app.get("/:word/echo", function (req, res) {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.send({
      time: req.time
    });
  }
);
app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/json", function(req, res){
     if(process.env.MESSAGE_STYLE === "uppercase"){
       res.json({"message" : "HELLO JSON"});
     }else res.json({"message" : "Hello json"});
   });
app.post("/name", function(req, res) {
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
































 module.exports = app;
