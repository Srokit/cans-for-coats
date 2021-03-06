var express = require('express');

var router = express.Router();

var Team = require('../../../models/teams');

router.delete('/:teamId', function(req, res) {

    var teamId = req.params.teamId;

    Team.findById(teamId, function(err, team) {
        if(!err) {
            // Found the team in the database now take it out
            team.remove(function(err) {
                if(!err) {
                    res.json({success: true});
                }
                else {
                    res.json({success: false, err: err.message});
                }
            });
        }
        else {
            res.json({success: false, err: err.message});
        }
    });
});

// Sending a patch request to this route indicates that we want to
// add a donation to this team
router.patch('/:teamId', function(req, res) {

    var teamId = req.params.teamId;

    var donationAmount = req.body.donationAmount;

    Team.findById(teamId, function(err, team) {

        team.dollarsDonated += donationAmount;
        team.save(function(err) {
            res.json({success: true});
        });
    });
});

module.exports = router;
