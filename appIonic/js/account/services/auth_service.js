'use strict';

var _ = require('lodash');
var _o;

module.exports = /*@ngInject*/
  function AuthService ($rootScope, $q, $http, $window, $state, AppConstants ) {

    _o = {
      $rootScope: $rootScope,
      $q: $q,
      $http: $http,
      $window: $window,
      $state: $state,
      homeState: AppConstants.homeState,
      // Restangular: Restangular,
      currentUser: null,
      routes: {
        apiUrl:                  AppConstants.baseUrl,
        tokenValidationPath:     AppConstants.baseUrl + '/auth/validate_token',
        signOutUrl:              AppConstants.baseUrl + '/auth/sign_out',
        emailRegistrationPath:   AppConstants.baseUrl + '/auth',
        confirmationSuccessUrl:  $window.location.href,
        passwordResetPath:       AppConstants.baseUrl + '/auth/password',
        passwordUpdatePath:      AppConstants.baseUrl + '/auth/password',
        passwordResetSuccessUrl: $window.location.href,
        emailSignInPath:         AppConstants.baseUrl + '/auth/sign_in',
        authProviderPaths: {
          github:                AppConstants.baseUrl + '/auth/github',
          facebook:              AppConstants.baseUrl + '/auth/facebook',
          google:                AppConstants.baseUrl + '/auth/google'
        }
      }
    };

    var AuthService = {};

    AuthService.getUser = getUser;
    AuthService.login = login;
    AuthService.logout = logout;
    AuthService.register = register;

    return AuthService;

  }

/** Returns a promise, sends a request to the server to check if
the current token is still valid  */
function getUser () {
  // use validate token here.
  var deferred = _o.$q.defer();

  if (_o.currentUser !== null) {
    deferred.resolve(_o.currentUser);
  } else {
    _o.$http.get(_o.routes.tokenValidationPath).then(
      function(results) {

        _o.currentUser = results.data.user;
        console.log(results.data.user);
        deferred.resolve(_o.currentUser);
      },
      function(response) {
        _deleteToken();
        deferred.reject(response);
      }
    );
  }
  return deferred.promise;
}

function login(formData, redirect) {
  // return _o.Restangular.all('login').post(formData).then(
  return _o.$http.post(_o.routes.emailSignInPath, formData ).then(
    function (results) {

      console.log('returned token', results.data);
      _setToken(results.data.user.token);
      _o.currentUser = results.data.user;
      _o.$window.sessionStorage.token = results.data.user.token;
      _o.$rootScope.$broadcast('user-signedin', _o.currentUser );
      // console.log('user', results.data.user);
      return _o.$state.go(_o.homeState);

    }
  );
}

function register(formData) {
  // if needing register delete any existing token
  _deleteToken();
  // return _o.Restangular.all('register').post(formData).then(
  return _o.$http.post(_o.routes.emailRegistrationPath, formData ).then(
    function () {
      return login(formData, true);
    }
  );
}

function logout() {
  return _o.$http.post(_o.routes.signOutUrl).then(
    function () {
      _clearUser();
      _deleteToken();
      _o.$state.go(_o.homeState);
    }
  );
}

// private functions
function _setToken (token) {
  // console.log('data', );
  _o.$window.sessionStorage.token = token;
}

function _deleteToken () {
  delete _o.$window.sessionStorage.token;
};

function _clearUser() {
  _.keys(_o.currentUser).forEach(function (key) {
    delete _o.currentUser[key];
  });
}

function _parseStateData(stateParams) {
  var result = null;
  if (stateParams.s &&
      _o.$state.get(stateParams.s) &&
      !_o.$state.get(stateParams.s).abstract) {
    result = {
      state: stateParams.s
    };
    if (!_.isEmpty(stateParams.sp)) {
      result.stateParams = JSON.parse(stateParams.sp);
    }
  }
  return result;
}
