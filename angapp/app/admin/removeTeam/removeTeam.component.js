angular.module('app').controller('RemoveTeamController', function($scope, TeamsService) {
    $scope.teams = [];

    $scope.remove = function(team) {
        TeamsService.remove(team, function(result) {
            if(result) {
                // Remove team from local list
                $scope.teams.splice($scope.teams.indexOf(team), 1);
            }
            else {
                console.error("Error removing team :(");
            }
        });
    };

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
