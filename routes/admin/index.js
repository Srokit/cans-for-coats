var express = require('express');
var jwt = require('jsonwebtoken');
var config = require('../../config');

var router = express.Router();

// Middleware to determine if user has access to further admin routes
router.use(function(req, res, next) {

    var adminToken = req.headers['admintoken'];
    console.log(req.headers);
    console.log(adminToken);

    isAdminTokenValid(adminToken, function(result) {
        if(result) {
            // User can continue in admin routes
            next();
        }
        else {
            // User denied from admin routes
            res.json({success: false, err: "NotAllowed"});
        }
    });
});

router.use('/newTeam', require('./newTeam'));
router.use('/teams', require('./teams'));

module.exports = router;

function isAdminTokenValid(token, cb) {

    jwt.verify(token, config.jwtSec, function(err, decoded) {
        if(!err) {
            // Valid admin token received
            cb(true);
        }
        else {
            //Invalid admin token
            cb(false);
        }
    });
}
