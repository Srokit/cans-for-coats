angular.module('app').service('LoginService', function($http) {

    this.post = function(credentials, cb) {

        $http({
            method: "POST",
            url: "/adminLogin",
            data: {
                credentials: credentials
            }
        })
        .then(function(response) {
            if(response.data.success) {

                cb(true, response.data.adminToken);
            }
            else {
                console.error("Failure to validate creds.");
                cb(false, null);
            }
        })
        .catch(function(err) {
            cb(false, null);
        });
    };
});
