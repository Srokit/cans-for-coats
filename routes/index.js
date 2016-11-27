var express = require('express');
var router = express.Router();

router.use('/teams', require('./teams'));
router.use('/admin', require('./admin'));

module.exports = router;
