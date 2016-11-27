angular.module('app').service('NewTeamService', function($http){

    var tempToken = "validAdminToken";

    this.post = function(newTeam, cb) {
        $http({
            method: "POST",
            url: "/admin/newTeam",
            headers: {
                "adminToken": tempToken
            },
            data: {
                team: newTeam
            }
        })
        .then(function(response) {
            console.log("Successfully posted newTeam", response.data);
            cb(true); //true for success
        })
        .catch(function(err) {
            console.error("Error posting newTeam", err.data);
            cb(false);
        });
    };
});
