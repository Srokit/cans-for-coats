angular.module('app').controller('teamsController', function($scope, teamsService) {
    $scope.teams = [{
        imgSrc: "exTeamProfPic.png",
        name: "ExampleTeam"
    }]

    teamsService.get(function(err, data) {
        if(err) {
            console.log("got the err");
        }
        else {
            console.log("got the data");

            $scope.teams = data;
        }
    });
});

angular.module('app').component('teams', {

    templateUrl: 'app/teams/teams.view.html',
    controller: 'teamsController'
});
