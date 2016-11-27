angular.module('app').controller('NewTeamController', function($scope, NewTeamService) {

    $scope.team = {};

    $scope.submit = function() {
        NewTeamService.post($scope.team, function(result) {

        });
    }
});

angular.module('app').component('newTeam', {

    controller: 'NewTeamController',
    templateUrl: 'app/admin/newTeam/newTeam.view.html'
});
