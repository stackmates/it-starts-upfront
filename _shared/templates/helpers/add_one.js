

module.exports = function(Handlebars) {

  Handlebars.registerHelper("addOne", function(number) {
    return parseInt(number, 10) + 1;
  });

};
