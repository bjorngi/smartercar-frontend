'use strict';

/**
 * @ngdoc directive
 * @name smartercarApp.directive:gauges
 * @description
 * # gauges
 */
angular.module('smartercarApp')
  .directive('gauges', function () {
    return {
      templateUrl: 'views/partials/gauges.html',
      transclude: false
    };
  });
