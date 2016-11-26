var express = require('express');
var router = express.Router();

router.use('/teams', require('./teams'));

module.exports = router;
