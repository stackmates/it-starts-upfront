angular.module('viz').directive('toptagChart', ['lastfm',

  function (lastfm) {

    var link = function ($scope, $el, $attrs) {
      var diameter = 500;

      var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(2.5);

      var svg = d3.select($el[0]).append("svg")
        .attr({width: diameter, height: diameter})
        .attr("viewBox", "0 0 " + diameter + " " + diameter);

      var chart = svg.append("g");

      chart.append("text").attr("id", "loading")
        .text("Loading...")
        .attr("transform", "translate(200,250)");

      var update = function () {
        var data = $scope.toptags.map(function (d) {
          d.value = d[$scope.tagsize];
          return d;
        });

        bubble.nodes({children: data});

        if (data.length) chart.select("#loading").remove();

        var selection = chart.selectAll(".node")
          .data(data);

        var enter = selection.enter()
          .append("g").attr("class", "node")
          .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });

        enter.append("circle")
          .attr("r", function (d) { return d.r; })
          .style("fill", '#FFCB72')
          .on("click", function (d) {
            svg.selectAll("circle").style("fill", '#FFCB72');
            d3.select(this).style("fill", "#19314A");

            lastfm.topArtists(d.name)
              .success(function (res) {
                if (res.error) {
                  throw new Error(res.message);
                } else {
                 $scope.currtag = d.name;
                  var artists = res.topartists.artist.map(function (a) {
                    a.genre = d.name;
                    a.arank = +a['@attr'].rank;
                    return a;
                  });
                  $scope.artists = artists;
                }
              });
          });

        enter.append("text")
          .attr("dy", ".3em")
          .style("text-anchor", "middle")
          .text(function (d) { return d.name; });

        selection.transition().duration(2000)
          .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });

        selection.selectAll("circle").transition().duration(3000)
          .attr("r", function (d) { return d.r; });

        resize();
      };

      function resize() {
        svg.attr("width", $el[0].clientWidth);
        svg.attr("height", $el[0].clientWidth); //It's a square
      }

      $scope.$on('windowResize',resize);
      $scope.$watch('tagsize', update);
      $scope.$watch('toptags', update);

    };
    return {
      template: '<div class="chart col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>',
      replace: true,
      link: link,
      restrict: 'E'
    };
}]);
