'use strict';

// var angular = require('angular');

module.exports = angular.module('app.haiku.provocation', [

])

// Routes
.config(
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.home', {
        url: '/',
        views: {
          '@': {
            controller: 'ProvocationController',
            templateUrl: 'haiku/provocation/templates/provocation.html'
          }
        },
        // resolve: {
        //   features: ['Restangular', function (Restangular) {
        //     return Restangular.all('features').getList();
        //   }]
        // }
      });

      $urlRouterProvider.otherwise( '/' );
  }
)

.controller('ProvocationController', require('./controllers/provocation'));
