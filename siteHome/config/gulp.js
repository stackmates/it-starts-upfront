// content directory can be anything
// you might prefer a shared markdown directory if working with non tech users
// /Users/[your-user-name]/googledrive/[your-path]/[your-domain]/external/

module.exports = {
  ghpages                 :   'ghpages/[your-domain]/home',
  baseURL                 :   '[your-domain].com',
  contentDir              :   './src/domain/[your-domain]/siteHome/markdown/',
  sheets                  :   ['google-sheets-id'],
  browserifyEntry         :   './src/domain/[your-domain]/siteHome/js/index.js',
  styleEntry              :   './src/domain/[your-domain]/siteHome/style/main.css',
  images                  :   [ './src/domain/[your-domain]/common/images/**/*' ],
  fonts                   :   [ 'src/common/fonts/**/*' ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/domain/[your-domain]/_shared/icons/**/*'
                              ],
  data                    :   [
                                'src/domain/[your-domain]/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/domain/[your-domain]/_shared/data/metalsmith_out',
  meta                    :   './src/domain/[your-domain]/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/domain/[your-domain]/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/domain/[your-domain]/**/*.css'
                              ],
  templates               :   [
                                './src/domain/[your-domain]/_shared/templates'
                              ],
  handlebarsHelpers       :     '../src/domain/[your-domain]/_shared/templates/helpers',
  metalsmithTemplates     :   {
                                engine:      'handlebars',
                                directory:   '../src/domain/[your-domain]/_shared/templates'
                              },
  metalsmithCollections   :   {
                                sheets: {
                                  pattern: 'sheets.json'
                                },
                                externalProvoke: {
                                  pattern: 'cards/_loop_external/provoke/*.md',
                                  sortBy: 'flow'
                                },
                                externalAffirm: {
                                  pattern: 'cards/_loop_external/affirm/*.md',
                                  sortBy: 'flow'
                                },
                                internalProvoke: {
                                  pattern: 'cards/_loop_internal/provoke/*.md',
                                  sortBy: 'flow'
                                },
                                internalAffirm: { pattern:
                                  'cards/_loop_internal/affirm/*.md',
                                  sortBy: 'flow'
                                }
                              }
}
