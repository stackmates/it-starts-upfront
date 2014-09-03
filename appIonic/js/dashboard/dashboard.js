'use strict';

module.exports = angular.module('app.dashboard', [
  // require('./services').name,
  // require('./directives').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'dashboard/templates/tab-dash.html',
            controller: 'DashboardController'
          }
        }
      });
  }
)

.controller( 'DashboardController', require('./controllers/dashboard_controller'))


;
