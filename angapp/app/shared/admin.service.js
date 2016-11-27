angular.module('app').service('AdminService', function() {

    var adminToken = "";

    this.getTok = function() {
        return adminToken;
    }

    this.setTok = function(newTok) {
        adminToken = newTok;
    }
});
