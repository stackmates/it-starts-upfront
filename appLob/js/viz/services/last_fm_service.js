'use strict';

module.exports = /*@ngInject*/
  function LastFMService ($http, $q) {

    // setup
    var apiKey = '2732fdfd69193a5fac1f649db7ca3f4d';

    // public
    var service = {
      topTags: topTags,
      topArtists: topArtists
    }
    return service;


    // functions
    function topTags () {
      var url = 'http://ws.audioscrobbler.com/2.0/';
      return $http.get(url, {
        params: {
          method: 'chart.gettoptags',
          api_key: apiKey,
          format:'json'
        }
      });
    }

    function topArtists (tag) {
      var url = 'http://ws.audioscrobbler.com/2.0/';
      return $http.get(url, {
        params: {
          method: 'tag.gettopartists',
          api_key: apiKey,
          tag: tag,
          format:'json'
        }
      });
    }

  };
