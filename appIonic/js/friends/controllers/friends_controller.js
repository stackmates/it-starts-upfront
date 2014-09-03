'use strict';

module.exports = /*@ngInject*/
  function FriendsListController($scope, FriendService) {
    $scope.friends = FriendService.all();
  };
