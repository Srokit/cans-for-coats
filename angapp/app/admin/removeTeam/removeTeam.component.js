angular.module('app').controller('RemoveTeamController', function($scope, TeamsService) {
    $scope.teams = [];

    TeamsService.get(function(err, teams) {
        if(!err) {
            $scope.teams = teams;
        }
        else {
            console.error("Error receiving teams:", err);
        }
    });
});

angular.module('app').component('removeTeam', {
    controller: 'RemoveTeamController',
    templateUrl: 'app/admin/removeTeam/removeTeam.view.html'
});
