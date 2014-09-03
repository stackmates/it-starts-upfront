'use strict';

var d3 = require('d3');

module.exports = /*@ngInject*/
  function progressBar () {
    return {
      link: link,
      restrict: 'E',
      scope: { progress: '=' }
    };
  };


// function link(scope, el, attr){
//   el = el[0]
//   var width = 500
//   var height = 20
//   var svg = d3.select(el).append('svg')
//     .attr({width: width, height: height})
//     .style('border', '1px solid black');

//   // the inner progress bar `<rect>`
//   var rect = svg.append('rect').style('fill', 'blue');

//   scope.$watch('progress', function(progress){
//     rect.attr({x: 0, y: 0, width: width * progress / 100, height: height });
//   })
// }
