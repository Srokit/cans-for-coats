angular.module('app').controller('LoginController', function($scope, LoginService, AdminService) {

    $scope.submit = function() {

        LoginService.post(function(result, adminToken) {
            if(result) {
                console.log("Token received: ", adminToken);
                AdminService.setTok(adminToken);
            }
            else {
                console.log("Token could not be received");
            }    
        });
    }
});

angular.module('app').component('adminLogin', {

    controller: 'LoginController',
    templateUrl: 'app/admin/login/login.view.html'
})
