

module.exports = function(config, Handlebars) {

  require('../../../../../common/ux_patterns/_handlebars_helpers/add_one')(Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/conditional')(Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/dates')(Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/debug')(Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/json')(Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/limit')(Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/link_to')(config, Handlebars);
  require('../../../../../common/ux_patterns/_handlebars_helpers/select_collection')(Handlebars);

  // partials
  require('./partials')(config, Handlebars);
};
