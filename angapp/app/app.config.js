angular.module('app').config(function($routeProvider) {

    $routeProvider
    .when('', {
        template: '<teams></teams>',
    })
    .when('teams', {
        template: '<teams></teams>',
    })
});
