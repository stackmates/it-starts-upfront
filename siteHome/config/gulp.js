

module.exports = {
  ghpages                 :   'ghpages/itstartsupfront/home',
  baseURL                 :   'itstartsupfront.com',
  contentDir              :   '/Users/wik/googledrive/dreams/private/itstartsupfront/external/',
  sheets                  :   ['1i0d9IogJ1fBAokYkeo4cvS0G36SLHOEt6XonnRbW8BY'],
  browserifyEntry         :   './src/projects/itstartsupfront/siteHome/js/index.js',
  styleEntry              :   './src/projects/itstartsupfront/siteHome/style/main.css',
  images                  :   [ './src/projects/itstartsupfront/common/images/**/*' ],
  fonts                   :   [ 'src/common/fonts/**/*' ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/projects/itstartsupfront/_shared/icons/**/*'
                              ],
  data                    :   [
                                // 'src/common/data/**/*',
                                'src/projects/itstartsupfront/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/projects/itstartsupfront/_shared/data/metalsmith_out',
  meta                    :   './src/projects/itstartsupfront/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/projects/itstartsupfront/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/projects/itstartsupfront/**/*.css'
                              ],
  fetchSitePartials       :   [
                                './src/projects/itstartsupfront/_shared/templates/partials/**/*.hbs'
                              ],
  fetchSitePages          :   [
                                './src/projects/itstartsupfront/_shared/templates/pages/**/*.hbs'
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
