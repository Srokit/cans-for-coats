// Entry point for CfC server
var express = require('express');
var app = express();

var config = require('./config');

app.listen(config.port);
