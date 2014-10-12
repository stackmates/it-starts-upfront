'use strict';

module.exports = angular.module('app.socket', [

])

// Routes
.config(
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.socket', {
        url: '/socket',
        views: {
          '@': {
            controller: 'SocketController',
            controllerAs: 'socket',
            templateUrl: 'socket/templates/socket.html'
          }
        }
      });
  }
)

.controller('SocketController', require('./controllers/socket_controller'))


;
