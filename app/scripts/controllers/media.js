'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('MediaCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // access properties
    //console.log($scope.mediaPlayer.network);
    //console.log($scope.mediaPlayer.ended);

    $scope.play = function () {
      $scope.customText = 'I started angular-media-player with a custom defined action!';
      $scope.mediaPlayer.playPause();
    };


  });
