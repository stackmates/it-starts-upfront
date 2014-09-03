'use strict';

module.exports =
  angular.module('app.shared.filters', [

  ])

  .filter('blankIfNegative', require('./blank_if_negative'))
  // .filter('excludeByDateFilter', require('./exclude_by_date')) // why?

  ;
