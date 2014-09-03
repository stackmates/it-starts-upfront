'use strict';

module.exports = angular.module('app.friends', [
  require('./services').name,
  // require('./directives').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('tab.friends', {
        url: '/friends',
        views: {
          'tab-friends': {
            templateUrl: 'friends/templates/tab-friends.html',
            controller: 'FriendsController'
          }
        }
      })
      .state('tab.friend-detail', {
        url: '/friend/:friendId',
        views: {
          'tab-friends': {
            templateUrl: 'friends/templates/friend-detail.html',
            controller: 'FriendDetailController'
          }
        }
      });
  }
)

.controller( 'FriendsController', require('./controllers/friends_controller'))
.controller( 'FriendDetailController', require('./controllers/friend_detail_controller'))


;
