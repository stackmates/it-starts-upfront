
var boot = function() {
  angular.element(document).ready(function() {
    window.gapi = {
      client: {
        setApiKey: function() {}
      },
      auth: {
        authorize: function() {}
      }
    };
    angular.bootstrap(document, ['app']);
  });
}



exports = module.exports = spyOnAngularService = function (service, methodName, result) {

  return spyOn(service, methodName).andReturn({then: function (fn) {
    fn(result);
  }});

};

window.bootE2E = function() {
  angular.module('app')
    .run(['$httpBackend', function($httpBackend) {
      console.log("-->");
    // $httpBackend.whenGET(/content\.googleapis\.com\/discovery\/v1\/apis\/oauth2\/v2\/rpc/)
    //   .respond({"methods":{"oauth2.tokeninfo":{"id":"oauth2.tokeninfo"},"oauth2.userinfo.get":{"id":"oauth2.userinfo.get"},"oauth2.userinfo.v2.me.get":{"id":"oauth2.userinfo.v2.me.get"}}});
    $httpBackend.whenGET(/^views\//).passThrough();
  }]);
}
