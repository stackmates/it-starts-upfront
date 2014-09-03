'use strict';

var _ = require('lodash');

module.exports = /*@ngInject*/
  function HaikuDetailController($scope, $stateParams, ContentService) {

      ContentService.getContent()
        .then(
          function (content) {
            var rec = _.find(content.externalDreamineering,
              { 'flow' : parseInt($stateParams.haikuId, 10) }
            );

            console.log(rec);
            console.log($stateParams.haikuId);
              // rec.flow
            $scope.haiku = rec;

          },
          function (result){
            console.log('Failed to load content: ' + result)
          }
        );

  };
