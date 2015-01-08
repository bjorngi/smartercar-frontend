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
      if(playlist[i].name === track.name && playlist[i].artist === track.artist) {
        return i;
      }
    }
    return -1;
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
    var trackNumber = containsTrack(track, $scope.playlist);
    if(trackNumber > 0) {
      $scope.mediaPlayer.play(trackNumber);

    } else {
      $scope.playlist.push(track);
      $scope.mediaPlayer.play(Object.keys($scope.playlist)+1);
    }
  });



  $scope.play = function () {
    $scope.mediaPlayer.playPause();
  }

  $scope.$watch('mediaPlayer.currentTrack', function(newTrack) {
    $scope.currentlyPlaying = $scope.playlist[newTrack-1]

  });


});


