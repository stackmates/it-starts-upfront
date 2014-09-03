

module.exports = {
  ghpages                :  'ghpages/dreamineering/appLob',
  baseURL                :  'app.dreamineering.com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/dreamineering.com/external/',
  browserifyEntry        :  './src/projects/dreamineering/appLob/js/index.js',
  browserifySpecs        :  './src/projects/dreamineering/appLob/**/*.spec.js',
  styleEntry             :  './src/projects/dreamineering/appLob/style/main.css',
  watchJS                :  './src/projects/dreamineering/appLob/js/**/*.js',
  indexHtml              :  'src/projects/dreamineering/appLob/index.html',
  jsonData               :  './src/projects/dreamineering/_shared/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/dreamineering/appLob/js/**/*.html',
                              './src/projects/dreamineering/_shared/angular/**/*.html',
                              './src/common/ux_patterns/**/*.html',
                            ],
  templatesJsOut         :  './src/projects/dreamineering/appLob/js/templates',
  karmaTestHelpers       :  './src/projects/dreamineering/appLob/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/dreamineering/_shared/images/**/*'
                            ],
  fonts                  :  [ 'src/common/fonts/**/*' ],
  icons                  :  [
                              // 'src/common/icons/**/*',
                              'src/projects/dreamineering/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/dreamineering/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/dreamineering/_shared/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/projects/dreamineering/**/*.css'
                            ]
}
