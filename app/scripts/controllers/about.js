'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
