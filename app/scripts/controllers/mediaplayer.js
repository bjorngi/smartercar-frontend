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

  function containsTrack(track, playlist) {
    var i;
    for (var i=0; i < playlist.length; ++i) {
      if(playlist[i] === track) {
        return true;
      }
      return false;
    }
  }

  $scope.songsAvailable = false;
  $scope.playlist = [];
  $scope.currentlyPlaying = null;

  $scope.$on('PlaylistEvent', function(message, data) {
    $scope.playlist = data;
    if (Object.keys($scope.playlist) != 0) {
      $scope.songsAvailable = true;
    }
  });

  $scope.$on('PlayTrack', function(message, track) {
    if(containsTrack(track, $scope.playlist)) {

    }

    $scope.playlist.push(track);

    $scope.mediaPlayer.play();
  });



  $scope.play = function () {
    $scope.mediaPlayer.playPause();
  }

  $scope.$watch('mediaPlayer.currentTrack', function(newTrack) {
    $scope.currentlyPlaying = $scope.playlist[newTrack-1]

  });


});


