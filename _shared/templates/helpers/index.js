

module.exports = function(config, Handlebars) {

  require('./add_one')(Handlebars);
  require('./conditional')(Handlebars);
  require('./dates')(Handlebars);
  require('./debug')(Handlebars);
  require('./json')(Handlebars);
  require('./limit')(Handlebars);
  require('./link-to')(config, Handlebars);

  // partials
  require('./partials')(config, Handlebars);
};
