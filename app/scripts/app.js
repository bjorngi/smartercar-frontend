'use strict';

/**
 * @ngdoc overview
 * @name smartercarApp
 * @description
 * # smartercarApp
 *
 * Main module of the application.
 */
angular
  .module('smartercarApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'frapontillo.gage',
    'mediaPlayer',
    'leaflet-directive',
    'shoppinpal.mobile-menu',
    'angularMoment',
    'wb.angularClock'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
