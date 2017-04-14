var angularjsMyApp = angular.module('angularjsMyApp', ['ngRoute']);
angularjsMyApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
        templateUrl : 'pages/home.html',
        controller : 'mainController'
    })
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller : 'aboutController'
    })
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller : 'contactController'
    });
  $locationProvider.html5Mode(true);
});

angularjsMyApp.controller('mainController', function($scope) {
  $scope.message = 'Home Page Message';
});

angularjsMyApp.controller('aboutController', function($scope) {
  $scope.message = 'About Page Message';
});

angularjsMyApp.controller('contactController', function($scope) {
  $scope.message = 'Contact Page Message';
});