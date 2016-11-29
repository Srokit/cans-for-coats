var mong = require('mongoose');
var Schema = mong.Schema;

var teamSchema = Schema({
    name: String
});

module.exports = mong.model('team', teamSchema);
