var express = require('express');

var router = express.Router();

var Team = require('../../models/teams');

router.post('/', function(req, res) {

    var team = req.body.team;

    var teamModel = new Team({name: team.name});
    teamModel.save(function(err) {
        if(!err) {
            // Team saved to DB successfully
            res.json({success: true});
        }
        else {
            // Team not saved to DB
            res.json({success: false, err: err.message});
        }
    });
});

module.exports = router;
