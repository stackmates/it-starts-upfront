'use strict';

module.exports = angular.module('app.haiku', [
  // require('./services').name,
  // require('./directives').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('tab.haiku', {
        url: '/haiku',
        views: {
          'tab-haiku': {
            templateUrl: 'haiku/templates/tab-haiku.html',
            controller: 'HaikuController'
          }
        }
      })
      .state('tab.haiku-detail', {
        url: '/haiku/:haikuId',
        views: {
          'tab-haiku': {
            templateUrl: 'haiku/templates/haiku-detail.html',
            controller: 'HaikuDetailController'
          }
        }
      });
  }
)

.controller( 'HaikuController', require('./controllers/haiku_controller'))
.controller( 'HaikuDetailController', require('./controllers/haiku_detail_controller'))


;
