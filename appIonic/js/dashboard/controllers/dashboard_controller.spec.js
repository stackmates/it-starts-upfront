'use strict';

require('../../index');

describe('DashboardController', function() {
  var $rootScope;
  var $scope;
  var controller;

  beforeEach(function () {

    angular.mock.module('app');

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('DashCtrl', {$scope:$scope});
    });

    // fire this here to replicate DOM behaviour for watchers
    $scope.digest();

  });

  describe('initialization', function() {

    it('should initiate greeting to "fucking hello"', function(){
      expect($scope.greeting).toEqual('fucking hello');
    });

  });

});
