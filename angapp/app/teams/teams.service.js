// The HTTP service that will get and post our teams data from the backend
angular.module('app').service('teamsService', function($http) {
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
    }
});
