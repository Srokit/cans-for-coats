// Entry point for CfC server
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./routes'));

//Serve up angular app to root route
app.use(express.static(__dirname + '/angapp'));

app.listen(config.port);

console.log("Listening on port: " + config.port);
