var moment = require('moment');

module.exports = function(Handlebars) {

  Handlebars.registerHelper('getYear', function() {
     return moment(Date.now()).format('YYYY');
  });

};
