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

    $scope.title = "Charge";
    $scope.min = 0;
    $scope.max = 100;
    $scope.value = 75;

      setInterval(function () {
        $scope.$apply(function () {
          $scope.value = Math.floor((Math.random() * 100) + 1);
        })
      }, 1000)

  });
