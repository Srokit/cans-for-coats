// The HTTP service that will get and post our teams data from the backend
angular.module('app').service('teamsService', function($http) {
    this.get = function(cb) {
        $http.get('/teams').then(function(response) {
            console.log("Got ", response.data);
            cb(null, response.data);
        })
        .catch(function(err) {
            console.log("Got error: ", err);
            cb(err, null);
        });
    }
});
