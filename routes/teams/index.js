var express = require('express');
var router = express.Router();

var Team = require('../../models/teams');

router.get('/', function(req, res) {
    Team.find({}, function(err, teams) {
        if(!err) {
            res.json({success: true, teams: teams});
        }
        else {
            res.json({success: false});
        }

    });

});

module.exports = router;
