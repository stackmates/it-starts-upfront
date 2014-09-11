

module.exports = function(Handlebars) {

  Handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
  });

}
