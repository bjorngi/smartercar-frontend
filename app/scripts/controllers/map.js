'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('MapCtrl', function ($scope, leafletData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var gpsConn = new WebSocket("ws://192.168.0.103:8080/gps");
    var data;

    gpsConn.onmessage = function(e) {
        data = (JSON.parse(e.data));
        console.log(data);
          leafletData.getMap().then(function(map) {
            map.panTo([62.784040,8.253784]);

        });
    };

    $scope.center = {
      lat: 63.425,
      lng: 10.397,
      zoom: 14

    };
    $scope.defaults = {
      scrollWheelZoom: false
    };

//    angular.extend($scope, {
//      center: {
//        lat: 63.425,
//        lng: 10.397,
//        zoom: 14
//
//      },
//      defaults: {
//        scrollWheelZoom: false
//      }
//    });
  });
