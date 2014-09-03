'use strict';


// Load angular dependencies.
require('angular');
require('angular-cookies');
require('angular-sanitize');
require('angular-animate');
require('angular-touch');

require('angular-ui-router');
require('angular-translate');
require('angular-ui-bootstrap');

require('center');
require('restangular');

// Register shared modules.
require('./templates/templates');
require('../../_shared/angular');

// Register app.
require('./app');
