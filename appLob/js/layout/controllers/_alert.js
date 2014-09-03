'use strict';

module.exports = /*@ngInject*/
  function ($scope, alert) {
    $scope.alerts = alert.getMessages();
    $scope.closeAlert = alert.removeMessage;
  };
