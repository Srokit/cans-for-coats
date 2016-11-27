var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

var config = require('../config');

router.post('/', function(req, res) {

    var givenEmail = req.body.credentials.email;
    var givenPass = req.body.credentials.password;

    if(givenEmail === config.adminEmail && givenPass === config.adminPass) {

        var adminToken = jwt.sign({admin: true}, config.jwtSec);
        res.json({success: true, adminToken: adminToken});
    }
    else {
        res.json({success: false, err: "InvalidCredentials"});
    }
});

module.exports = router;
