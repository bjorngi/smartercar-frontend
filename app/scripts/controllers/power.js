'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:PowerCtrl
 * @description
 * # PowerCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('PowerCtrl', function ($scope, $controller) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $controller('GaugeCtrl', {$scope:$scope});


  });
