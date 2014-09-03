'use strict';


module.exports = angular.module('app.viz.directives', [
  require('../services').name
])

.directive('toptagChart', require('./top_tag_chart_directive'))
.directive('artistsChart', require('./artists_chart_directive'))
.directive('donutChart', require('./donut_chart_directive'))
.directive('scatter', require('./scatter_plot_directive'))

;
