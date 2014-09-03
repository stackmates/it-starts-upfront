'use strict';


module.exports = /*@ngInject*/
  function LoginController( $scope, alert, AuthService ) {

    $scope.user = {};

    // Attempt to authenticate the user specified in the form's model
    $scope.login = function() {
      // Clear any previous security errors
      $scope.showError = null;

      AuthService.login({
        nick: $scope.user.nick,
        password: $scope.user.password
      }).then(
      function(){
        $scope.showError = false;
        alert.clearMessages();
      },
      function(res){
        if (res.data.error && res.data.message) {
          $scope.showError = true;
          alert.setMessages('danger', res.data.message);
        } else {
          throw new Error('Failed to login.');
        }
        console.log(res);
      });

    };

    $scope.clearForm = function() {
      $scope.user = {};
    };

  };




