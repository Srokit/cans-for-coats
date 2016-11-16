angular.module('app').controller('teamsController', function($scope) {
    $scope.teams = [{
        imgSrc: "exTeamProfPic.png",
        name: "ExampleTeam"
    }]
});

angular.module('app').component('teams', {

    templateUrl: 'app/teams/teams.view.html',
    controller: 'teamsController'
});
