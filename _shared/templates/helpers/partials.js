
var fs = require('fs');
var path = require('path');


module.exports = function(cfg, Handlebars) {

  // directories
  var standardHtmlDir = path.join( __dirname, '../../../../../', 'common/templates/partials/_main');
  var atomsDir        = path.join( __dirname, '../../../../../', 'common/templates/partials/atoms');
  var moleculesDir    = path.join( __dirname, '../../../../../', 'common/templates/partials/molecules');
  var organismsDir    = path.join( __dirname, '../../../../../', 'common/templates/partials/organisms');

  // use common partials
  // standardHTML

  var closeTemplate = fs.readFileSync(standardHtmlDir + '/' + '_close.hbs', 'utf8');
  Handlebars.registerPartial('_close', closeTemplate);

  var headTemplate = fs.readFileSync(standardHtmlDir + '/' + '_head.hbs', 'utf8');
  Handlebars.registerPartial('_head', headTemplate);

  var htmlTemplate = fs.readFileSync(standardHtmlDir + '/' + '_html.hbs', 'utf8');
  Handlebars.registerPartial('_html', htmlTemplate);

  var scriptsTemplate = fs.readFileSync(standardHtmlDir + '/' + '_scripts.hbs', 'utf8');
  Handlebars.registerPartial('_scripts', scriptsTemplate);


  // use atoms

  // var [atom]Template = fs.readFileSync(atomsDir + '/' + 'atom_File.hbs', 'utf8');
  // Handlebars.registerPartial('_[atom_Name]', [atom]Template);

  // use molecules
  var excerptTemplate = fs.readFileSync(moleculesDir + '/' + 'm_Excerpt.hbs', 'utf8');
  Handlebars.registerPartial('m_Excerpt', excerptTemplate);

  var headerLoopTemplate = fs.readFileSync(moleculesDir + '/' + 'm_Header--loop.hbs', 'utf8');
  Handlebars.registerPartial('m_Header--loop', headerLoopTemplate);

  var headerPageTemplate = fs.readFileSync(moleculesDir + '/' + 'm_Header--page.hbs', 'utf8');
  Handlebars.registerPartial('m_Header--page', headerPageTemplate);

  var siteNavTemplate = fs.readFileSync(moleculesDir + '/' + 'm_SiteNav--overlay.hbs', 'utf8');
  Handlebars.registerPartial('m_SiteNav--overlay', siteNavTemplate);

  var topBarOverlayTemplate = fs.readFileSync(moleculesDir + '/' + 'm_TopBar--overlay.hbs', 'utf8');
  Handlebars.registerPartial('m_TopBar--overlay', topBarOverlayTemplate);

  var topBarScrollTemplate = fs.readFileSync(moleculesDir + '/' + 'm_TopBar--scroll.hbs', 'utf8');
  Handlebars.registerPartial('m_TopBar--scroll', topBarScrollTemplate);

  // use organisms
  var cardAffirmTemplate = fs.readFileSync(organismsDir + '/' + 'o_Card--affirm.hbs', 'utf8');
  Handlebars.registerPartial('o_Card--affirm', cardAffirmTemplate);

  var cardProvokeTemplate = fs.readFileSync(organismsDir + '/' + 'o_Card--provoke.hbs', 'utf8');
  Handlebars.registerPartial('o_Card--provoke', cardProvokeTemplate);

  var footerTemplate = fs.readFileSync(organismsDir + '/' + 'o_Footer.hbs', 'utf8');
  Handlebars.registerPartial('o_Footer', footerTemplate);


  // get all the project specific partials
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
