angular.module('app').controller('AddDonationController', function($scope, TeamsService) {

    $scope.donation = 0;

    $scope.addDonation = function(team) {
        TeamsService.addDonation(team, donation, function(result) {
            if(result) {
                //success
            }
            else {
                console.error("Donation failed!");
            }
        });
    };
});

angular.module('app').component('addDonation', {
    controller: 'AddDonationController',
    templateUrl: 'app/admin/addDonation/addDonation.view.html'
});
