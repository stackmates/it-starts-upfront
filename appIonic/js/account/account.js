
'use strict';

module.exports = angular.module('app.account', [
  require('./services').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'account/templates/tab-account.html',
            controller: 'AccountController'
          }
        }
      })
      .state('tab.account-login', {
        url: '/account/login',
        views: {
          'tab-account': {
            templateUrl: 'account/templates/account-login.html',
            controller: 'LoginController'
          }
        }
      })
      .state('tab.account-register', {
        url: '/account/register',
        views: {
          'tab-account': {
            templateUrl: 'account/templates/account-register.html',
            controller: 'RegisterController'
          }
        }
      });
  }
)

.controller('AccountController', require('./controllers/account_controller'))
.controller('LoginController', require('./controllers/login_controller'))
.controller('RegisterController', require('./controllers/register_controller'))

;
