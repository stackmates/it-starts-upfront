'use strict';

// Load angular dependencies.
require('angular');
require('ionic');
require('angular-animate');
require('angular-sanitize');
require('angular-ui-router');

require('ionic-angular');

// app specific
require('angular-translate');

// Register shared modules.
require('./templates/templates');
require('../../_shared/angular');

// Register app.
require('./app');
