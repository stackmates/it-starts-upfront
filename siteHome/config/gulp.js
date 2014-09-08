

module.exports = {
  ghpages                 :   'ghpages/[your-domain]/home',
  baseURL                 :   '[your-domain].com',
  contentDir              :   '/Users/[you]/googledrive/[your-path]/[your-domain]/external/',
  sheets                  :   ['google-sheets-id'],
  browserifyEntry         :   './src/projects/[your-domain]/siteHome/js/index.js',
  styleEntry              :   './src/projects/[your-domain]/siteHome/style/main.css',
  images                  :   [ './src/projects/[your-domain]/common/images/**/*' ],
  fonts                   :   [ 'src/common/fonts/**/*' ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/projects/[your-domain]/_shared/icons/**/*'
                              ],
  data                    :   [
                                // 'src/common/data/**/*',
                                'src/projects/[your-domain]/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/projects/[your-domain]/_shared/data/metalsmith_out',
  meta                    :   './src/projects/[your-domain]/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/projects/[your-domain]/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/projects/[your-domain]/**/*.css'
                              ],
  fetchSitePartials       :   [
                                './src/projects/[your-domain]/_shared/templates/partials/**/*.hbs'
                              ],
  fetchSitePages          :   [
                                './src/projects/[your-domain]/_shared/templates/pages/**/*.hbs'
                              ],
  metalsmithCollections   :   {
                                sheets: { pattern: 'sheets.json' },
                                externalProvoke: { pattern: 'haiku/_loop_external/provoke/*.md', sortBy: 'flow' },
                                externalAffirm: { pattern: 'haiku/_loop_external/affirm/*.md', sortBy: 'flow' },
                                internalProvoke: { pattern: 'haiku/_loop_internal/provoke/*.md', sortBy: 'flow' },
                                internalAffirm: { pattern: 'haiku/_loop_internal/affirm/*.md', sortBy: 'flow' },
                                problems: { pattern: 'philosophy/problems/details/*.md', sortBy: 'belief', reverse: true }
                              }
}
