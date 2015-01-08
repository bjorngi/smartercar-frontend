'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MediaplayerCtrl
 * @description
 * # MediaplayerCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
.controller('MediaplayerCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.songsAvailable = false;
  $scope.playlist = [];

  $scope.$on('PlaylistEvent', function(message, data) {
    $scope.playlist = data;
    if (Object.keys($scope.playlist) != 0) {
      $scope.songsAvailable = true;
    }
  });

  $scope.$on('PlayTrack', function(message, track) {
    $scope.track = track;
    $scope.mediaPlayer.load(track)
    $scope.mediaPlayer.play()
  });

  $scope.play = function () {
    $scope.mediaPlayer.playPause();
  }

});


