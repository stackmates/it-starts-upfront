/*
 * client/js/layout/controllers/_nav.js
 */

'use strict';

var _ = require('lodash');

var _o;
var user;

module.exports = /*@ngInject*/
  function _NavController ($location, $scope, $state, AuthService, layout) {
    _o = {
      $location: $location,
      $scope: $scope,
      $state: $state,
      auth: AuthService,
      layout: layout
    };

    _o.auth.getUser()
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
    // $scope.$watch('authService.user', function(){
    //   $scope.user = authService.user;
    // });

    _.assign($scope, {
      login: login,
      logout: logout,
      register: register
    });

  };

function login() {
  var params;

  if (_o.$state.includes('app.login') || _o.$state.includes('app.register')) {
    params = _o.$location.search();
  } else {
    params = {
      s: _o.$state.current.name
    };
    if (!_.isEmpty(_o.$location.search())) {
      params.sp = JSON.stringify(_o.$location.search());
    }
  }

  _o.$state.go('app.login', params);
}

function logout() {
  // _o.layout.startSpinner();
  _o.auth.logout();
}

function register() {
  var params;

  if (_o.$state.includes('app.register') || _o.$state.includes('app.login')) {
    params = _o.$location.search();
  } else {
    params = {
      s: _o.$state.current.name
    };
    if (!_.isEmpty(_o.$location.search())) {
      params.sp = JSON.stringify(_o.$location.search());
    }
  }

  _o.$state.go('app.register', params);
}
