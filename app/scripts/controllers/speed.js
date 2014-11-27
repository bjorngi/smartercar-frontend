'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:GaugeCtrl
 * @description
 * # GaugeCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('SpeedCtrl', function ($scope, $controller) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $controller('GaugeCtrl', {$scope:$scope});


    $scope.title = "km/h";
    $scope.min = 0;
    $scope.max = 130;
    $scope.value = 75;

      setInterval(function () {
        $scope.$apply(function () {
          $scope.value = Math.floor((Math.random() * 100) + 1);
        })
      }, 10000)


  });
