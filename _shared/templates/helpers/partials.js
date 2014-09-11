
var fs = require('fs');
var path = require('path');

module.exports = function(cfg, Handlebars) {

  var partialsDir = path.join( __dirname, '..', 'partials');

    var filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function (filename) {
      var matches = /^([^.]+).hbs$/.exec(filename);
      if (!matches) {
        return;
      }
      var name = matches[1];
      var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
      Handlebars.registerPartial(name, template);
    });


};


