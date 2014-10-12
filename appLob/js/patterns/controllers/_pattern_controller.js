'use strict';

module.exports = /*@ngInject*/
  function PatternController ($state) {
    $state.transitionTo('app.pattern.accordion');
  };
