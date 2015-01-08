'use strict';

/**
 * @ngdoc directive
 * @name smartercarApp.directive:mediaPlayer
 * @description
 * # mediaPlayer
 */
angular.module('smartercarApp')
.controller('MediaListCtrl', function ($scope, $http, $spMenu, $rootScope) {

  $scope.tracks = [];
  $scope.playlist = [];

  $scope.loadMusic = function() {
    $http.get('http://0.0.0.0:8000/music/list').
    success(function(data, status, headers, config) {
      $scope.tracks = data;
      $rootScope.$broadcast('PlaylistEvent', data);
    }).
      error(function(data, status, headers, config) {
    })
  };

  $scope.loadMusic();

  $scope.createPlaylist = function() {

  }

  $scope.playTrack = function(track) {
    $spMenu.toggle();
    $rootScope.$broadcast('PlayTrack', track)
  }


})
.directive('mediaLister', function () {
  return {
    templateUrl: 'views/partials/media-lister.html',
  }
});

