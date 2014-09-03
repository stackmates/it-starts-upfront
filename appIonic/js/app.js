'use strict';

window._ = require('lodash');

module.exports = angular.module('app', [
  'ionic',
  'ui.router',
  'pascalprecht.translate',
  'app.templates',
  'app.shared',
   // require('../../shared/modules/auth').name,
   require('./account').name,
   require('./dashboard').name,
   require('./friends').name,
   require('./haiku').name
])

.constant('AppConstants', {
  'baseUrl': 'http://localhost:3000',
  'homeState': 'tab.dash'
})

.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('AuthInterceptor');
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "main/templates/tabs.html"
    })

  // Each tab has its own nav history stack:

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})

;
