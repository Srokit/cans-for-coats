var mong = require('mongoose');
var Schema = mong.Schema;

var teamSchema = Schema({
    name: String,
    dollarsDonated: {
        type: Number,
        default: 0
    }
});

module.exports = mong.model('team', teamSchema);
