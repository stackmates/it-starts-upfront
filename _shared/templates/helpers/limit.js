
module.exports = function(Handlebars) {

  Handlebars.registerHelper('limit', function(collection, limit, start) {
      return collection.slice(start, start + limit);
  });

}
