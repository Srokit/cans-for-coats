angular.module('app').controller('NavbarController', function($scope) {

    $scope.links = ['Home', 'Teams'];
    
});

angular.module('app').component('navbar', {

    controller: 'NavbarController',
    templateUrl: 'app/navbar/navbar.view.html'
});
