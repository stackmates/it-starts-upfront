'use strict';

module.exports = /*@ngInject*/
  function LastFMController ($scope, $window, LastFMService) {

    var vm = this;

    vm.tagsize = 'reach';
    vm.toptags = [];
    vm.currtag = '';
    vm.artists = [];

    $window.addEventListener('resize', function () { //A
      $scope.$broadcast('windowResize');
    });

    LastFMService.topTags() //B
      .success(function (res) {
        if (res.error) {
          throw new Error(res.message);
        } else {
          vm.toptags = res.tags.tag.map(function (t) {
            t.reach    = +t.reach;
            t.taggings = +t.taggings;
            return t;
          });
        }
      });

    vm.employers = [
        { value: 3.2, name: 'United States Department of Defense' }
      , { value: 2.3, name: 'People\'s Liberation Army' }
      , { value: 2.1, name: 'Walmart' }
      , { value: 1.9, name: 'McDonald\'s' }
      , { value: 1.7, name: 'National Health Service' }
      , { value: 1.6, name: 'China National Petroleum Corporation' }
      , { value: 1.5, name: 'State Grid Corporation of China' }
      , { value: 1.4, name: 'Indian Railways' }
      , { value: 1.3, name: 'Indian Armed Forces' }
      , { value: 1.2, name: 'Hon Hai Precision Industry (Foxconn)' }
    ]

  }
