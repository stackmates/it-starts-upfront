
'use strict';

module.exports = angular.module('app.auth.services', [
])

.factory('AuthService', require('./auth_service'))
.factory('AuthInterceptor', require('./auth_interceptor'))


;
