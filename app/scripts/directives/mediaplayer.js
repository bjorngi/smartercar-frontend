'use strict';

/**
 * @ngdoc directive
 * @name smartercarApp.directive:mediaPlayer
 * @description
 * # mediaPlayer
 */
angular.module('smartercarApp')
.controller('MediaCtrl', function ($scope, $http, $spMenu) {


  $scope.play = function () {
    //$scope.mediaPlayer.playPause();
    $scope.mediaPlayer.playpause();
    console.log($scope.playlist);
  };

  $scope.tracks = null;
  $scope.playlist = [];

  $scope.loadMusic = function() {
    $http.get('http://0.0.0.0:8000/music/list').
    success(function(data, status, headers, config) {
      $scope.tracks = data;
      console.log(data);
    }).
      error(function(data, status, headers, config) {
    })
  };

  $scope.loadMusic();

  $scope.createPlaylist = function() {

  }

  $scope.playTrack = function(track) {
    $spMenu.toggle();
    $scope.mediaPlayer.playPause();
  }



})
.directive('mediaLister', function () {
  return {
    templateUrl: 'views/partials/media-lister.html',
  }
//})
//.directive('mediaPlayer', function () {
//  return {
//    templateUrl: 'views/partials/media-player.html',
//  }
});

