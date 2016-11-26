var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json([{name: "TeamFromDB"}, {name: "TeamFromDB2"}]);
});

module.exports = router;
