'use strict';

// require('angular/angular');
// require('./user_service');

module.exports = angular.module( 'app.auth', [
  require('./services').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          '@': {
            controller:     'LoginController',
            templateUrl:    'modules/auth/templates/login.html'
          }
        }
      })
      .state('app.register', {
        url: '/register',
        views: {
          '@': {
            controller:     'RegisterController',
            templateUrl:    'modules/auth/templates/register.html'
          }
        }
      });
  }
)

.controller( 'LoginController', require('./controllers/login'))
.controller( 'RegisterController', require('./controllers/register'))

;
