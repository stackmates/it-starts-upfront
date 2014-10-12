'use strict';

var _ = require('lodash');

module.exports = /*@ngInject*/
  function ($scope, $http, $sce, PodioService )  {

    $scope.isCollapsed = true;

    PodioService.getContent()
      .then(
        function (content) {
          $scope.podioList = content;
          // flattenedResponse(content);
        },
        function (result){
          console.log('Failed to load content: ' + result)
        }
      );

    $scope.search = {};

    $scope.gotoLink = function(space) {
      window.open(space.url)
    };

    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="dt-highlightedText">$&</span>'));
    };

    $scope.$watch('search.text', function(newValue, oldValue) {
      console.log(newValue, oldValue);
    });

  }


function flattenedResponse (response) {
  var flattened = [];
  for (var i = response.length -1; i >= 0; i--) {
    flattened.push({"org": response[i].name, "space": response[i].name, "url":response[i].url});
    for (var j = response[i].spaces.length - 1; j >= 0; j--) {
      flattened.push({
        "org":   response[i].name,
        "space": response[i].spaces[j].name,
        "url":   response[i].spaces[j].url
      })
    };
  };
  return flattened;
};
