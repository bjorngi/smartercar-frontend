'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('MapCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    angular.extend($scope, {
      center: {
        lat: 63.425,
        lng: 10.397,
        zoom: 14

      },
      defaults: {
        scrollWheelZoom: false
      }
    });
  });
