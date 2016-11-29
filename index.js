// Entry point for CfC server
var express = require('express');
var bodyParser = require('body-parser');

var mong = require('mongoose');

var app = express();

var config = require('./config');

mong.connect("mongodb://localhost/cfc");

mong.connection.on('open', function() {
    console.log("Connected to mongo db.");
})
.on('error', function(err) {
    console.error("Error connecting to mongo db:", err.message);
    process.exit(-1);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./routes'));

//Serve up angular app to root route
app.use(express.static(__dirname + '/angapp'));

app.listen(config.port);

console.log("Listening on port: " + config.port);
