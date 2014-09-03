

module.exports = {
  ghpages                :  './ghpages/dreamineering/mobile',
  baseURL                :  'mob.dreamineering.com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/dreamineering.com/external/',
  browserifyEntry        :  './src/projects/dreamineering/appIonic/js/index.js',
  browserifySpecs        :  './src/projects/dreamineering/appIonic/**/*.spec.js',
  cordova                :  './src/projects/dreamineering/appIonic/cordova/**/*',
  styleEntry             :  './src/projects/dreamineering/appIonic/style/ionic.app.scss',
  watchJS                :  './src/projects/dreamineering/appIonic/js/**/*.js',
  indexHtml              :  './src/projects/dreamineering/appIonic/index.html',
  jsonData               :  './src/projects/dreamineering/appIonic/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/dreamineering/appIonic/js/**/*.html',
                              './src/projects/dreamineering/_shared/angular/**/*.html'
                            ],
  templatesJsOut         :  './src/projects/dreamineering/appIonic/js/templates',
  karmaTestHelpers       :  './src/projects/dreamineering/appIonic/test/helpers/**/*.js',
  images                 :  [ './src/projects/dreamineering/_shared/images/**/*' ],
  fonts                  :  [ './src/common/fonts/**/*' ],
  icons                  :  [ './src/common/icons/**/*', 'src/projects/dreamineering/_shared/icons/**/*' ],
  data                   :  [
                              'src/projects/dreamineering/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/dreamineering/_shared/meta',
  watchStyles            :  [
                              'src/common/style/sass/ionic/**/*.scss',
                              'src/projects/dreamineering/appIonic/**/*.scss'
                            ]
};


// Decide whether to stick with sass
// or just play with variables and let ionic do it's thing and build rework on top?
