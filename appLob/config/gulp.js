

module.exports = {
  ghpages                :  'ghpages/[your-domain]/appLob',
  baseURL                :  'app.[your-domain].com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/[your-domain]/external/',
  browserifyEntry        :  './src/domain/[your-domain]/appLob/js/index.js',
  browserifySpecs        :  './src/domain/[your-domain]/appLob/**/*.spec.js',
  styleEntry             :  './src/domain/[your-domain]/appLob/style/main.css',
  watchJS                :  './src/domain/[your-domain]/appLob/js/**/*.js',
  indexHtml              :  'src/domain/[your-domain]/appLob/index.html',
  jsonData               :  './src/domain/[your-domain]/_shared/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/domain/[your-domain]/appLob/js/**/*.html',
                              './src/domain/[your-domain]/_shared/angular/**/*.html',
                              './src/common/ux_patterns/**/*.html',
                            ],
  templatesJsOut         :  './src/domain/[your-domain]/appLob/js/templates',
  karmaTestHelpers       :  './src/domain/[your-domain]/appLob/test/helpers/**/*.js',
  images                 :  [
                              './src/domain/[your-domain]/_shared/images/**/*'
                            ],
  fonts                  :  [ 'src/common/fonts/**/*' ],
  icons                  :  [
                              // 'src/common/icons/**/*',
                              'src/domain/[your-domain]/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/domain/[your-domain]/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/domain/[your-domain]/_shared/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/domain/[your-domain]/**/*.css'
                            ],
  handlebarsHelpers       :   '../src/domain/[your-domain]/_shared/templates/helpers'
}


// handlebars not needed temp work around
