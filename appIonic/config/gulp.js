

module.exports = {
  ghpages                :  './ghpages/[your-domain]/mobile',
  baseURL                :  'mob.[your-domain].com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/[your-domain]/external/',
  browserifyEntry        :  './src/domain/[your-domain]/appIonic/js/index.js',
  browserifySpecs        :  './src/domain/[your-domain]/appIonic/**/*.spec.js',
  cordova                :  './src/domain/[your-domain]/appIonic/cordova/**/*',
  styleEntry             :  './src/domain/[your-domain]/appIonic/style/ionic.app.scss',
  watchJS                :  './src/domain/[your-domain]/appIonic/js/**/*.js',
  indexHtml              :  './src/domain/[your-domain]/appIonic/index.html',
  jsonData               :  './src/domain/[your-domain]/appIonic/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/domain/[your-domain]/appIonic/js/**/*.html',
                              './src/domain/[your-domain]/_shared/angular/**/*.html'
                            ],
  templatesJsOut         :  './src/domain/[your-domain]/appIonic/js/templates',
  karmaTestHelpers       :  './src/domain/[your-domain]/appIonic/test/helpers/**/*.js',
  images                 :  [
                              './src/domain/[your-domain]/_shared/images/**/*'
                            ],
  fonts                  :  [ './src/common/fonts/**/*' ],
  icons                  :  [
                              './src/common/icons/**/*',
                              'src/domain/[your-domain]/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/domain/[your-domain]/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/domain/[your-domain]/_shared/meta',
  watchStyles            :  [
                              'src/common/style/sass/ionic/**/*.scss',
                              'src/domain/[your-domain]/appIonic/**/*.scss'
                            ],
  handlebarsHelpers       :   '../src/domain/[your-domain]/_shared/templates/helpers'
};


// Decide whether to stick with sass
// or just play with variables and let ionic do it's thing and build rework on top?
