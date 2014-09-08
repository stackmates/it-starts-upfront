

module.exports = {
  ghpages                :  'ghpages/[your-domain]/appLob',
  baseURL                :  'app.[your-domain].com',
  contentDir             :  '/Users/wik/googledrive/dreams/private/[your-domain]/external/',
  browserifyEntry        :  './src/projects/[your-domain]/appLob/js/index.js',
  browserifySpecs        :  './src/projects/[your-domain]/appLob/**/*.spec.js',
  styleEntry             :  './src/projects/[your-domain]/appLob/style/main.css',
  watchJS                :  './src/projects/[your-domain]/appLob/js/**/*.js',
  indexHtml              :  'src/projects/[your-domain]/appLob/index.html',
  jsonData               :  './src/projects/[your-domain]/_shared/data/**/*.json',
  templatesHtmlIn        :  [
                              './src/projects/[your-domain]/appLob/js/**/*.html',
                              './src/projects/[your-domain]/_shared/angular/**/*.html',
                              './src/common/ux_patterns/**/*.html',
                            ],
  templatesJsOut         :  './src/projects/[your-domain]/appLob/js/templates',
  karmaTestHelpers       :  './src/projects/[your-domain]/appLob/test/helpers/**/*.js',
  images                 :  [
                              './src/projects/[your-domain]/_shared/images/**/*'
                            ],
  fonts                  :  [ 'src/common/fonts/**/*' ],
  icons                  :  [
                              // 'src/common/icons/**/*',
                              'src/projects/[your-domain]/_shared/icons/**/*'
                            ],
  data                   :  [
                              'src/projects/[your-domain]/_shared/data/metalsmith_out/**/*'
                            ],
  meta                   :  './src/projects/[your-domain]/_shared/meta',
  watchStyles            :  [
                              './src/common/style/rework/**/*.css',
                              './src/common/ux_patterns/**/*.css',
                              './src/projects/[your-domain]/**/*.css'
                            ]
}
