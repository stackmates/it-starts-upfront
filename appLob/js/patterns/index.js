'use strict';

module.exports = angular.module('app.bootstrap', [
  'ui.router',
   // require('./services').name

])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.pattern', {
        url: '/patterns',
        views: {
          '@': {
            controller: 'PatternController',
            templateUrl: 'patterns/templates/_patterns.html'
          }
        }
      })
      .state('app.pattern.accordion', {
        url: '/accordion',
          controller: 'DemoAccordionController',
          controllerAs: 'accordionDemo',
          templateUrl: 'patterns/templates/accordion-demo.html'
      })
      .state('app.pattern.alert', {
        url: '/alerts',
          controller: 'DemoAlertController',
          controllerAs: 'alertDemo',
          templateUrl: 'patterns/templates/alert-demo.html'
      })
      .state('app.pattern.buttons', {
        url: '/buttons',
          controller: 'DemoButtonsController',
          controllerAs: 'buttonDemo',
          templateUrl: 'patterns/templates/buttons-demo.html'
      })
      .state('app.pattern.carousel', {
        url: '/carousel',
          controller: 'DemoCarouselController',
          controllerAs: 'carouselDemo',
          templateUrl: 'patterns/templates/carousel-demo.html'
      })
      .state('app.pattern.collapse', {
        url: '/collapse',
          controller: 'DemoCollapseController',
          controllerAs: 'collapseDemo',
          templateUrl: 'patterns/templates/collapse-demo.html'
      })
      .state('app.pattern.datepicker', {
        url: '/datepicker',
          controller: 'DemoDatepickerController',
          controllerAs: 'datepickerDemo',
          templateUrl: 'patterns/templates/datepicker-demo.html'
      })
      .state('app.pattern.dropdown', {
        url: '/dropdown',
          controller: 'DemoDropdownController',
          controllerAs: 'dropdownDemo',
          templateUrl: 'patterns/templates/dropdown-demo.html'
      })
      .state('app.pattern.input', {
        url: '/input',
          controller: 'DemoInputController',
          controllerAs: 'inputDemo',
          templateUrl: 'patterns/templates/input-demo.html'
      })
      .state('app.pattern.modal', {
        url: '/modal',
          controller: 'DemoModalController',
          controllerAs: 'modalDemo',
          templateUrl: 'patterns/templates/modal-demo.html'
      })
      .state('app.pattern.pagination', {
        url: '/pagination',
          controller: 'DemoPaginationController',
          controllerAs: 'paginationDemo',
          templateUrl: 'patterns/templates/pagination-demo.html'
      })
      .state('app.pattern.popover', {
        url: '/popover',
          controller: 'DemoPopoverController',
          controllerAs: 'popoverDemo',
          templateUrl: 'patterns/templates/popover-demo.html'
      })
      .state('app.pattern.progressbar', {
        url: '/progressbar',
          controller: 'DemoProgressbarController',
          controllerAs: 'progressbarDemo',
          templateUrl: 'patterns/templates/progressbar-demo.html'
      })
      .state('app.pattern.rating', {
        url: '/rating',
          controller: 'DemoRatingController',
          controllerAs: 'ratingDemo',
          templateUrl: 'patterns/templates/rating-demo.html'
      })
      .state('app.pattern.tabs', {
        url: '/tabs',
          controller: 'DemoTabsController',
          controllerAs: 'tabsDemo',
          templateUrl: 'patterns/templates/tabs-demo.html'
      })
      .state('app.pattern.timepicker', {
        url: '/timepicker',
          controller: 'DemoTimepickerController',
          controllerAs: 'timepickerDemo',
          templateUrl: 'patterns/templates/timepicker-demo.html'
      })
      .state('app.pattern.tooltip', {
        url: '/tooltip',
          controller: 'DemoTooltipController',
          controllerAs: 'tooltipDemo',
          templateUrl: 'patterns/templates/tooltip-demo.html'
      })
      .state('app.pattern.typeahead', {
        url: '/typeahead',
          controller: 'DemoTypeaheadController',
          controllerAs: 'typeaheadDemo',
          templateUrl: 'patterns/templates/typeahead-demo.html'
      })
      .state('app.pattern.ui-select', {
        url: '/ui-select',
          controller: 'DemoUISelectController',
          controllerAs: 'uiSelectDemo',
          templateUrl: 'patterns/templates/ui-select-demo.html'
      })
  }
)

.controller('PatternController', require('./controllers/_pattern_controller'))

.controller('DemoAccordionController', require('./controllers/accordion_controller'))
.controller('DemoAlertController', require('./controllers/alert_controller'))
.controller('DemoButtonsController', require('./controllers/buttons_controller'))
.controller('DemoCarouselController', require('./controllers/carousel_controller'))
.controller('DemoCollapseController', require('./controllers/collapse_controller'))
.controller('DemoDatepickerController', require('./controllers/datepicker_controller'))
.controller('DemoDropdownController', require('./controllers/dropdown_controller'))
.controller('DemoInputController', require('./controllers/input_controller'))
.controller('DemoModalController', require('./controllers/modal_controller'))
.controller('ModalInstanceController', require('./controllers/modal_instance_controller'))
.controller('DemoPaginationController', require('./controllers/pagination_controller'))
.controller('DemoPopoverController', require('./controllers/popover_controller'))
.controller('DemoProgressbarController', require('./controllers/progressbar_controller'))
.controller('DemoRatingController', require('./controllers/rating_controller'))
.controller('DemoTabsController', require('./controllers/tabs_controller'))
.controller('DemoTimepickerController', require('./controllers/timepicker_controller'))
.controller('DemoTooltipController', require('./controllers/tooltip_controller'))
.controller('DemoTypeaheadController', require('./controllers/typeahead_controller'))
.controller('DemoUISelectController', require('./controllers/ui_select_controller'))


;
