'use strict';


var _views = {
  alert: {
    controller: 'AlertController',
    templateUrl: 'layout/templates/_alert.html'
  },
  footer: {
    controller: 'FooterController',
    templateUrl: 'layout/templates/_footer.html'
  },
  header: {
    controller: 'HeaderController',
    templateUrl: 'layout/templates/_header.html'
  },
  nav: {
    controller: 'NavController',
    templateUrl: 'layout/templates/_nav.html'
  }
}

module.exports = angular.module('app.layout', [
  require('./services/layout').name
])

// Routes
.config(
  function ($stateProvider, layoutProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        views: _views
        // resolve: {
        //   auth: function($auth) {
        //     return $auth.validateUser();
        //   }
        // }
      });

    layoutProvider.setViews(_views);
  }
)

.controller('AlertController', require('./controllers/_alert'))
.controller('FooterController', require('./controllers/_footer'))
.controller('HeaderController', require('./controllers/_header'))
.controller('NavController', require('./controllers/_nav'));


