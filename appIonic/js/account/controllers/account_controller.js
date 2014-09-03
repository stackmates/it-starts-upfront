'use strict';

module.exports = /*@ngInject*/
  function AccountController($scope, AuthService) {

    $scope.user = {};

    AuthService.getUser()
      .then(
        function(user) {
          // console.log('user', user);
          $scope.user = user;
        },
        function(result) {
          console.log('Failed to validate token ' + result );
        }
      );


    $scope.$on('user-signedin', function(evt, user){
      console.log('received');
      $scope.user = user;
    });

    $scope.signOut = function(){
      AuthService.logout();
    }

  };
