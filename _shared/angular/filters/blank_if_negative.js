'use strict';

module.exports = /*@ngInject*/
  function blankIfNegative() {
    return function(input) {
      if (input <= 0) {
        return ' ';
      } else {
        return input;
      }
    };
  };
