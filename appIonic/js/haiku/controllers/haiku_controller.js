'use strict';

module.exports = /*@ngInject*/
  function HaikuListController($scope, ContentService) {


    ContentService.getContent()
      .then(
        function (content) {
          console.log('this', content.externalProvoke);
          $scope.haikuList = content.externalProvoke;
        },
        function (result){
          console.log('Failed to load content: ' + result)
        }
      );

  };
