'use strict';

module.exports = /*@ngInject*/
  function excludeByDate() {
    return function(arr, date) {
      if (date === 'all') {
        return arr;
      }
      var newArr = [];
      angular.forEach(arr, function(evt) {
        var evtDate = new Date(evt.start.dateTime);
        if (evtDate <= date) {
          newArr.push(evt);
        }
      });
      return newArr;
    };
  };
