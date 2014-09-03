'use strict';

module.exports = angular.module('app.shared.services', [
])

.factory('alert', require('./alert'))
.factory('app', require('./app'))
.factory('route', require('./route'))
.factory('util', require('./util'))
.factory('ContentService', require('./content_service'))


;
