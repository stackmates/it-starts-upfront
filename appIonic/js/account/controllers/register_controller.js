'use strict';

module.exports = /*@ngInject*/
  function RegisterController($scope, AuthService ) {
    $scope.user = {};

    $scope.register = function() {

      AuthService.register({
        nick: $scope.user.nick,
        email: $scope.user.email,
        password: $scope.user.password
      })
      .then(function() {
         // _o.$scope.showError = false;
         // _o.alert.clearMessages();
      }, function(res) {
        if (res.data.error && res.data.error.message) {
          // _o.$scope.showError = true;
          // _o.alert.setMessages('danger', res.data.error.message);
        } else {
          throw new Error('Failed to register.');
        }
      });

    };

  };
