

module.exports = function(config, Handlebars) {

  require('../../../../../common/templates/helpers/add_one')(Handlebars);
  require('../../../../../common/templates/helpers/conditional')(Handlebars);
  require('../../../../../common/templates/helpers/dates')(Handlebars);
  require('../../../../../common/templates/helpers/debug')(Handlebars);
  require('../../../../../common/templates/helpers/json')(Handlebars);
  require('../../../../../common/templates/helpers/limit')(Handlebars);
  require('../../../../../common/templates/helpers/link_to')(config, Handlebars);
  require('../../../../../common/templates/helpers/select_collection')(Handlebars);

  // partials
  require('./partials')(config, Handlebars);
};
