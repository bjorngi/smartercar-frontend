'use strict';

/**
 * @ngdoc overview
 * @name smartercarApp
 * @description
 * # smartercarApp
 *
 * Main module of the application.
 */
angular
  .module('smartercarApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'frapontillo.gage',
    'mediaPlayer',
    'leaflet-directive'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

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

'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:GaugeCtrl
 * @description
 * # GaugeCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('SpeedCtrl', ["$scope", "$controller", function ($scope, $controller) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $controller('GaugeCtrl', {$scope:$scope});


    $scope.title = "km/h";
    $scope.min = 0;
    $scope.max = 130;
    $scope.value = 75;


  }]);

'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:PowerCtrl
 * @description
 * # PowerCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('PowerCtrl', ["$scope", "$controller", function ($scope, $controller) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $controller('GaugeCtrl', {$scope:$scope});


  }]);

'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:GaugeCtrl
 * @description
 * # GaugeCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('GaugeCtrl', ["$scope", function ($scope) {
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

  }]);

'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('MediaCtrl', ["$scope", function ($scope) {
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


  }]);

'use strict';

/**
 * @ngdoc function
 * @name smartercarApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the smartercarApp
 */
angular.module('smartercarApp')
  .controller('MapCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    angular.extend($scope, {
      center: {
        lat: 63.425,
        lng: 10.397,
        zoom: 14

      },
      defaults: {
        scrollWheelZoom: false
      }
    });
  }]);
