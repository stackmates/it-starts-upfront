

module.exports = {
  ghpages                :  './ghpages/itstartsupfront/mobile',
  baseURL                :  'mob.itstartsupfront.com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/itstartsupfront/external/',
  browserifyEntry        :  './src/projects/itstartsupfront/appIonic/js/index.js',
  browserifySpecs        :  './src/projects/itstartsupfront/appIonic/**/*.spec.js',
  cordova                :  './src/projects/itstartsupfront/appIonic/cordova/**/*',
  styleEntry             :  './src/projects/itstartsupfront/appIonic/style/ionic.app.scss',
  watchJS                :  './src/projects/itstartsupfront/appIonic/js/**/*.js',
  indexHtml              :  './src/projects/itstartsupfront/appIonic/index.html',
  jsonData               :  './src/projects/itstartsupfront/appIonic/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/itstartsupfront/appIonic/js/**/*.html',
                              './src/projects/itstartsupfront/_shared/angular/**/*.html'
                            ],
  templatesJsOut         :  './src/projects/itstartsupfront/appIonic/js/templates',
  karmaTestHelpers       :  './src/projects/itstartsupfront/appIonic/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/itstartsupfront/_shared/images/**/*'
                            ],
  fonts                  :  [ './src/common/fonts/**/*' ],
  icons                  :  [
                              './src/common/icons/**/*',
                              'src/projects/itstartsupfront/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/itstartsupfront/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/itstartsupfront/_shared/meta',
  watchStyles            :  [
                              'src/common/style/sass/ionic/**/*.scss',
                              'src/projects/itstartsupfront/appIonic/**/*.scss'
                            ]
};


// Decide whether to stick with sass
// or just play with variables and let ionic do it's thing and build rework on top?
