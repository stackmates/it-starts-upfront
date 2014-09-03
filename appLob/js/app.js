'use strict';

window._ = require('lodash');
// var $ = require('jquery');
var moment = require('moment');
// var socketio = require('socket.io-client');


module.exports = angular.module('app', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'pascalprecht.translate',
  'restangular',
  'ui.bootstrap',
  'ui.router',
  'app.templates',
  'app.shared',
  require('../../../../common/ux_patterns/menu_slide/angular').name,
  require('./layout').name,
  require('../../_shared/angular/modules/auth').name,
  require('./viz').name,
  // 'app.account',
  // 'app.admin',
  require('./main').name
])

// .constant('baseUrl', 'http://192.168.50.4:8080' )
.constant('AppConstants', {
  'baseUrl': 'http://localhost:3000',
  'homeState': 'app.home'
})

// Enable HTML5 Mode.
.config(
  function ($locationProvider) {
    $locationProvider.html5Mode(false);
  }
)

.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('AuthInterceptor');
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

// Set Restangular base URL.
.config(function (RestangularProvider, AppConstants) {
    RestangularProvider
      .setBaseUrl(AppConstants.baseUrl)
      .setDefaultHttpFields({ withCredentials: true })
      .setDefaultHeaders({
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      });
  }
)


//Attach variables to $rootScope.
.run(
  function ($location, $rootScope, $state, $stateParams ) {
    _.assign($rootScope, {
      _: _,
      // $: $,
      $location: $location,
      $state: $state,
      $stateParams: $stateParams,
      // app: app,
      // config: app.config,
      moment: moment
    });
  }
)


// Connect to socket.io server.
// .run(
//   function () {
//     var retryInterval = 5000,
//         retryTimer;

//     (function connect() {
//       clearInterval(retryTimer);

//       var socket = global.socket = socketio.connect('', {
//         'force new connection': true,
//         'max reconnection attempts': Infinity,
//         'reconnection limit': 10 * 1000
//       });

//       socket.on('connect', function () {
//         socket.emit('info', {
//           // modernizr: Modernizr,
//           navigator: _.transform(navigator, function (result, val, key) {
//             if (_.isString(val)) {
//               result[key] = val;
//             }
//           })
//         });
//       });

//       socket.on('test', function (data) {
//         console.log(data);
//         socket.emit('test', { hello: 'from browser world' });
//       });

//       retryTimer = setInterval(function () {
//         if (!socket.socket.connected &&
//             !socket.socket.connecting &&
//             !socket.socket.reconnecting) {
//           connect();
//         }
//       }, retryInterval);
//     }());
//   }
// )

;
