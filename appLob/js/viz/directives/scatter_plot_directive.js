'use strict';

var d3 = require('d3');

module.exports = /*@ngInject*/
  function scatter () {
    return {
      link: link,
      restrict: 'E',
      scope: { data: '=', selectedPoint: '=' }
    }
  }


function link(scope, el, attr){
  el = el[0];
  var w, h;
  var svg = d3.select(el).append('svg');
  var xAxisG = svg.append('g').attr('class', 'x-axis');
  var yAxisG = svg.append('g').attr('class', 'y-axis');
  var points = svg.append('g').attr('class', 'points').selectAll('g.point');
  var x = d3.scale.linear();
  var y = d3.scale.linear();
  var xAxis = d3.svg.axis().scale(x).orient('bottom')
    .tickFormat(function(d, i){ return i + 1; }); // 1 index the company ranks
  var yAxis = d3.svg.axis().scale(y).orient('left');
  var m = 50;

  scope.$watch(function(){
    w = el.clientWidth;
    h = el.clientHeight;
    return w + h;
  }, resize);

  function resize(){
    svg.attr({width: w, height: h});
    x.range([m, w - m]);
    y.range([h - m, m]);
    xAxis.tickSize(-h + 2 * m);
    yAxis.tickSize(-w + 2 * m);
    xAxisG.attr('transform', 'translate(' + [0, y.range()[0] + 0.5] + ')');
    yAxisG.attr('transform', 'translate(' + [x.range()[0], 0] + ')');
    update();
  }

  scope.$watch('data', update);

  function update(){
    if(!scope.data){ return };
    var data = scope.data;
    var x_extent = d3.extent(data, function(d, i){ return i });
    x.domain(x_extent);
    var y_max = d3.max(data, function(d){ return d.value });
    y.domain([0, y_max]);
    points = points.data(data);
    points.exit().remove();
    var point = points.enter().append('g').attr('class', 'point');
    point.append('circle').attr('r', 5)
      .on('mouseover', function(d){
        scope.$apply(function(){
          scope.selectedPoint = d;
        });
      });

    // update the position of all the points
    points.attr('transform', function(d, i){
      return 'translate(' + [x(i), y(d.value)] + ')';
    });

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);

  };
}

