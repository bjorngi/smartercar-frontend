'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:GaugeCtrl
 * @description
 * # GaugeCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('GaugeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = "tesxt";
    $scope.height = 100;
    $scope.width = 130;
    $scope.gaugeWidthScale = 0.5;
    $scope.startAnimationTime = 0;
    $scope.startAnimationType = undefined;
    $scope.refreshAnimationTime = undefined;
    $scope.refreshAnimationType = undefined;
    $scope.donut = undefined;
    $scope.donutAngle = 360;
    $scope.counter = true;
    $scope.formatNumber = true;
    $scope.humanFriendly = true;
    $scope.humanFriendlyDecimal = true;
    $scope.textRenderer = function (value) {
      return value;
    };

  });
