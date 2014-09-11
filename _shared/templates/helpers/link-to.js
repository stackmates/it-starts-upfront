var path = require('path')

module.exports = function(config, Handlebars) {

  Handlebars.registerHelper('linkTo', function(url) {
    var baseURL = config.env == "production"
      ? config.baseURL
      : 'http://localhost:' + config.port
    return baseURL + path.join('/', url.toString())
  })

};
