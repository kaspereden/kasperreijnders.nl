'use strict';

/**
 * @ngdoc overview
 * @name kasperreijndersnlApp
 * @description
 * # kasperreijndersnlApp
 *
 * Main module of the application.
 */
angular
  .module('kasperreijndersnlApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
