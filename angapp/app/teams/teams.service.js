// The HTTP service that will get and post our teams data from the backend
angular.module('app').service('TeamsService', function($http, AdminService) {
    this.get = function(cb) {
        $http.get('/teams').then(function(response) {
            if(response.data.success) {
                console.log("Got ", response.data.teams);
                cb(null, response.data.teams);
            }
            else {
                var err = response.data.err;
                cb(err, null);
            }
        })
        .catch(function(err) {
            console.log("Got error: ", err);
            cb(err, null);
        });
    };

    this.remove = function(team, cb) {

        var adminToken = AdminService.getTok();
        $http({
            method: "DELETE",
            url: "admin/teams/"+team._id,
            headers: {
                "admintoken": adminToken
            }
        })
        .then(function(response) {
            var data = response.data;

            if(data.success) {
                cb(true);
            }
            else {
                console.error("From node:", data.err);
                cb(false);
            }
        })
        .catch(function(err) {
            cb(false);
        })
    };

    this.addDonation = function(team, donationAmount, cb) {

        var adminToken = AdminService.getTok();
        $http({
            method: "PATCH",
            url: "admin/teams/"+team._id,
            headers: {
                "admintoken": adminToken
            },
            data: {
                donationAmount: donationAmount
            }
        })
        .then(function(response) {
            var data = response.data;
            if(data.success) {
                cb(true);
            }
            else {
                console.error(data.err);
                cb(false);
            }
        })
        .catch(function(err) {

        });
    };
});
