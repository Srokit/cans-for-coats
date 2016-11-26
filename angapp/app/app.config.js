angular.module('app').config(function($routeProvider) {

    $routeProvider
    .when('/', {
        template: '<teams></teams>'
    })
    .when('/teams', {
        template: '<teams></teams>'
    })
    .when('/admin/newteam', {
        template: '<new-team></new-team>'
    })
    .otherwise({
        redirectTo: '/'
    })
});
