angular.module('app').controller('NewTeamController', function($scope, NewTeamService, AdminService) {

    $scope.team = {};

    $scope.submit = function() {
        var adminToken = AdminService.getTok();
        NewTeamService.post($scope.team, adminToken, function(result) {
        
        });
    }
});

angular.module('app').component('newTeam', {

    controller: 'NewTeamController',
    templateUrl: 'app/admin/newTeam/newTeam.view.html'
});
