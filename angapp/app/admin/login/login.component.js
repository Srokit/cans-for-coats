angular.module('app').controller('LoginController', function($scope, LoginService) {

    $scope.submit = function() {

        LoginService.post(function(result) {


        });
    }
});

angular.module('app').component('adminLogin', {

    controller: 'LoginController',
    templateUrl: 'app/admin/login/login.view.html'
})
