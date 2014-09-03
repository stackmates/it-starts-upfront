'use strict';

module.exports = /*@ngInject*/
  function FriendDetailController($scope, $stateParams, FriendService) {
    $scope.friend = FriendService.get($stateParams.friendId);
  };

