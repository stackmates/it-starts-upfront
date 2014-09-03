'use strict';

require('./auth_service');

describe('AuthService', function() {
  var values;
  var factory;

  beforeEach(function(){
    angular.mock.module('app.auth.services');

    inject(function ($injector) {
      factory = $injector.get('AuthService');
    });

  });


  describe('AuthService', function() {

  });


});
