'use strict';

module.exports = /*@ngInject*/
  function HomeController($http, AppConstants, ContentService ) {

    var vm = this;

    $http.get(AppConstants.baseUrl + '/salestax').success(function(result){
      console.log(result);
      vm.taxrate = result;
    });

    ContentService.getContent()
      .then(
        function (content) {
          vm.haikuExternal = content.externalProvoke;
          vm.haikuBanner = content.externalProvoke[0];
        },
        function (result){
          console.log('Failed to load content: ' + result)
        }
      );

  };
