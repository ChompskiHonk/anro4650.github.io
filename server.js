var app = express();
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

const cors = require('cors');
const shortId = require("shortid");
const mongoose = require('mongoose');
let uri = 'mongodb+srv://ChompskyHonk:FRUITATA@cluster0.jqztq.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(3000, () => {
    console.log('Currently listening on port ' + listener.address().port)
});

var courses = new mongoose.Schema({
    cID: {type: int, unique: true, required: true, default: shortId.generate},
    name: {type: String},
    description: {type: String},
    deadline: {type: Date},
    instructor: {type: int}
});

var student = new mongoose.Schema({
    sID: {type: int},
    username: {type: String, unique: true, required:true},
    fullname: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    Enrolled: courses [5]
});

var professor = new mongoose.Schema({
    pID: {type: int},
    username: {type: String, unique: true, required:true},
    fullname: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    Courses: courses [20]
});
