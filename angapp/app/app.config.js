angular.module('app').config(function($routeProvider) {

    $routeProvider
    .when('/', {
        template: '<teams></teams>'
    })
    .when('/teams', {
        template: '<teams></teams>'
    })
    .when('/admin', {
        template: '<admin></admin>'
    })
    .when('/admin/login', {
        template: '<admin-login></admin-login>'
    })
    .when('/admin/newteam', {
        template: '<new-team></new-team>'
    })
    .when('/admin/removeteam', {
        template: '<remove-team></remove-team>'
    })
    .when('/admin/adddonation', {
        template: '<add-donation></add-donation>'
    })
    .otherwise({
        redirectTo: '/'
    })
});
