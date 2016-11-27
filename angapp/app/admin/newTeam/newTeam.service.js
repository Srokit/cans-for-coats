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
            if(response.data.success) {
                console.log("Successfully posted newTeam:", response.data);
                cb(true); //true for success
            }
            else {
                console.error("Error validating admin:", response.data.err);
                cb(false);
            }
        })
        .catch(function(err) {
            console.error("Error posting newTeam:", err.data);
            cb(false);
        });
    };
});
