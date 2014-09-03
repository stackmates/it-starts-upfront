

'use strict';

module.exports = angular.module( 'app.viz', [
  'ui.router',
  'restangular',
  require('./services').name,
  require('./directives').name
])

  // require('./directives/directives').name
.config(
  function($stateProvider) {
    $stateProvider
      .state('app.viz', {
        url: '/viz',
        views: {
          '@': {
            controller: 'LastFMController',
            controllerAs: 'viz',
            templateUrl: 'viz/templates/viz.html'
          }
        }
      });
  }
)

.controller( 'LastFMController', require('./controllers/last_fm_controller'))

;














/**
 * Notes
 *
 *
 * Object constancy?
 *
 *
 */
