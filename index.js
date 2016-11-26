// Entry point for CfC server
var express = require('express');
var app = express();

var config = require('./config');

app.use(require('./routes'));

//Serve up angular app to root route
app.use(express.static(__dirname + '/angapp'));

app.listen(config.port);

console.log("Listening on port: " + config.port);
