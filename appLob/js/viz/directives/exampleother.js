

angular.module('viz').directive('artistsChart', ['$window',

  function ($window) {

    var link = function ($scope, $el, $attrs) {
      var csize = [500, 500], radius = 22;

      var svg = d3.select($el[0]).append("svg")
        .attr({width: csize[0], height: csize[1]})
        .attr("viewBox", "0 0 " + csize[0] + " " + csize[1]);

      var chart = svg.append("g");

      var coords = function (position) {
        var x, y;
        x = ((position - 1) % 5) * 100;
        y = (Math.ceil(position / 5)) * 45;
        return {x: x, y: y};
      }

      var transform = function (d) {
        var c = coords(d.arank);
        return "translate(" + (c.x + radius + 30) + "," + c.y + ")";
      };

      chart.selectAll(".number")
        .data(d3.range(1,51)).enter()
        .append("text")
          .attr("class", "number")
          .style("text-anchor", "middle")
          .text(function (d) { return d; })
          .attr("transform", function (d) {
            var c = coords(d);
            return "translate(" + (c.x + radius + 30) + "," + (c.y + 12) + ")";
          });

      var update = function () {
        var data = $scope.artists.map(function (d) {
          d.value = 10;
          return d;
        });

        var selection = chart.selectAll(".node")
          .data(data, function (d) { return d.name; });

        selection.style("opacity", 1)

        selection.transition().duration(2000)
          .attr("transform", transform);

        selection.selectAll("circle")
          .style("fill", "#19314A")

        var enter = selection.enter()
          .append("g")
            .attr("class", "node")
            .style("opacity", 0)
            .attr("transform", transform);

        enter.append("circle")
          .attr("r", radius)
          .style("fill", "#6B95BF")
          .on("click", function (d) {
            $window.open(d.url, "_blank");
          });

        enter.append("text")
          .attr("dy", ".3em")
          .style("text-anchor", "middle")
          .text(function (d) { return d.name.slice(0,21); });

        enter.transition().duration(2000)
          .style("opacity", 1)

        selection.exit().transition().duration(1000)
          .attr("transform", function (d) {
            return "translate(" + 1000 + "," + 1000 + ")";
          }).remove();

        resize();
      };

      function resize() {
        svg.attr("width", $el[0].clientWidth);
        svg.attr("height", $el[0].clientWidth); //It's a square
      }

      $scope.$on('windowResize',resize);
      $scope.$watch('artists', update);
    };
    return {
      template: '<div class="chart col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>',
      replace: true,
      scope: {artists: '='},
      link: link,
      restrict: 'E'
    };
