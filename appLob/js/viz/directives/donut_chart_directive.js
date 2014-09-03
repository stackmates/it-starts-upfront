'use strict';

var d3 = require('d3');

module.exports = /*@ngInject*/
  function donutChart () {
    return {
      link: link,
      restrict: 'E',
      scope: { data: '=' }
    }
  }


function link(scope, el, attr){
  var color = d3.scale.category10();
  var width = 200;
  var height = 200;
  var min = Math.min(width, height);
  var svg = d3.select(el[0]).append('svg');
  var pie = d3.layout.pie().sort(null);
  var arc = d3.svg.arc()
    .outerRadius(min / 2 * 0.9)
    .innerRadius(min / 2 * 0.5);

  // get value from object to solve inheritence issue with ngrepeat
  pie.value(function(d){ return d.value; });

  svg.attr({width: width, height: height});
  var g = svg.append('g')
    // center the donut chart
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // add the <path>s for each arc slice
  var arcs = g.selectAll('path');

  scope.$watch('data', function(data){
    arcs = arcs.data(pie(data));
    arcs.enter().append('path')
      .style('stroke', 'white')
      .attr('fill', function(d, i){ return color(i) });
    arcs.exit().remove();
    arcs.attr('d', arc);
  }, true);
}


