i'use strict';

module.exports = /*@ngInject*/
  function SocketController($scope, $http, $socket ) {


    var vm = this;

    $socket.on('echo', function (data) {
      $scope.serverResponse = data;
    });

    $scope.emitBasic = function emitBasic() {
      $socket.emit('echo', $scope.dataToSend);
      $scope.dataToSend = '';
    };

    $scope.emitACK = function emitACK() {
      $socket.emit('echo-ack', $scope.dataToSend, function (data) {
        $scope.serverResponseACK = data;
      });
      $scope.dataToSend = '';
    };


  };

