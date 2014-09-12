

module.exports = {
  ghpages                :  './ghpages/[your-domain]/mobile',
  baseURL                :  'mob.[your-domain].com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/[your-domain]/external/',
  browserifyEntry        :  './src/projects/[your-domain]/appIonic/js/index.js',
  browserifySpecs        :  './src/projects/[your-domain]/appIonic/**/*.spec.js',
  cordova                :  './src/projects/[your-domain]/appIonic/cordova/**/*',
  styleEntry             :  './src/projects/[your-domain]/appIonic/style/ionic.app.scss',
  watchJS                :  './src/projects/[your-domain]/appIonic/js/**/*.js',
  indexHtml              :  './src/projects/[your-domain]/appIonic/index.html',
  jsonData               :  './src/projects/[your-domain]/appIonic/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/[your-domain]/appIonic/js/**/*.html',
                              './src/projects/[your-domain]/_shared/angular/**/*.html'
                            ],
  templatesJsOut         :  './src/projects/[your-domain]/appIonic/js/templates',
  karmaTestHelpers       :  './src/projects/[your-domain]/appIonic/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/[your-domain]/_shared/images/**/*'
                            ],
  fonts                  :  [ './src/common/fonts/**/*' ],
  icons                  :  [
                              './src/common/icons/**/*',
                              'src/projects/[your-domain]/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/[your-domain]/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/[your-domain]/_shared/meta',
  watchStyles            :  [
                              'src/common/style/sass/ionic/**/*.scss',
                              'src/projects/[your-domain]/appIonic/**/*.scss'
                            ],
  handlebarsHelpers       :   '../src/projects/[your-domain]/_shared/templates/helpers'
};


// Decide whether to stick with sass
// or just play with variables and let ionic do it's thing and build rework on top?
