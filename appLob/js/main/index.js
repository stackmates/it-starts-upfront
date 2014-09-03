'use strict';

// var angular = require('angular');

module.exports = angular.module('app.main', [

])

// Routes
.config(
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.home', {
        url: '/',
        views: {
          '@': {
            controller: 'HomeController',
            controllerAs: 'home',
            templateUrl: 'main/templates/home.html'
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

.controller('HomeController', require('./controllers/home'));
