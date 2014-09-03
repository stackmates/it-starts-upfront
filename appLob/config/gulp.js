

module.exports = {
  ghpages                :  'ghpages/itstartsupfront/appLob',
  baseURL                :  'app.itstartsupfront.com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/itstartsupfront/external/',
  browserifyEntry        :  './src/projects/itstartsupfront/appLob/js/index.js',
  browserifySpecs        :  './src/projects/itstartsupfront/appLob/**/*.spec.js',
  styleEntry             :  './src/projects/itstartsupfront/appLob/style/main.css',
  watchJS                :  './src/projects/itstartsupfront/appLob/js/**/*.js',
  indexHtml              :  'src/projects/itstartsupfront/appLob/index.html',
  jsonData               :  './src/projects/itstartsupfront/_shared/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/itstartsupfront/appLob/js/**/*.html',
                              './src/projects/itstartsupfront/_shared/angular/**/*.html',
                              './src/common/ux_patterns/**/*.html',
                            ],
  templatesJsOut         :  './src/projects/itstartsupfront/appLob/js/templates',
  karmaTestHelpers       :  './src/projects/itstartsupfront/appLob/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/itstartsupfront/_shared/images/**/*'
                            ],
  fonts                  :  [ 'src/common/fonts/**/*' ],
  icons                  :  [
                              // 'src/common/icons/**/*',
                              'src/projects/itstartsupfront/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/itstartsupfront/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/itstartsupfront/_shared/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/projects/itstartsupfront/**/*.css'
                            ]
}
