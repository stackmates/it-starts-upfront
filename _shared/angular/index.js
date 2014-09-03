'use strict';


module.exports = angular.module('app.shared', [
  require('./directives').name,
  require('./filters').name,
  require('./services').name
])

// i18n
.config(function ($translateProvider) {
  $translateProvider
    .translations('de', require('./i18n/de.json'))
    .translations('en', require('./i18n/en.json'))
    .translations('es', require('./i18n/es.json'))
    .translations('fr', require('./i18n/fr.json'))
    .translations('jp', require('./i18n/jp.json'))
    .translations('ko', require('./i18n/ko.json'))
    .translations('ru', require('./i18n/ru.json'))
    .translations('zh', require('./i18n/zh.json'))
    .preferredLanguage('en');
})

;
