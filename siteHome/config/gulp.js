

module.exports = {
  ghpages                 :   'ghpages/dreamineering/home',
  baseURL                 :   'dreamineering.com',
  contentDir              :   '/Users/wik/googledrive/dreams/private/dreamineering.com/external/',
  sheets                  :   ['1i0d9IogJ1fBAokYkeo4cvS0G36SLHOEt6XonnRbW8BY'],
  browserifyEntry         :   './src/projects/dreamineering/siteHome/js/index.js',
  styleEntry              :   './src/projects/dreamineering/siteHome/style/main.css',
  images                  :   [ './src/projects/dreamineering/common/images/**/*' ],
  fonts                   :   [ 'src/common/fonts/**/*' ],
  icons                   :   [
                                'src/common/icons/**/*',
                                'src/projects/dreamineering/_shared/icons/**/*'
                              ],
  data                    :   [
                                // 'src/common/data/**/*',
                                'src/projects/dreamineering/_shared/data/metalsmith_in'
                              ],
  dataOut                 :   './src/projects/dreamineering/_shared/data/metalsmith_out',
  meta                    :   './src/projects/dreamineering/_shared/meta',
  watchScripts            :   [
                                './src/common/util_modules/**/*.js',
                                './src/common/ux_patterns/**/*.js',
                                './src/projects/dreamineering/**/*.js'
                              ],
  watchStyles             :   [
                                './src/common/style/rework/**/*.css',
                                './src/common/ux_patterns/**/*.css',
                                './src/projects/dreamineering/**/*.css'
                              ],
  fetchSitePartials       :   [
                                './src/projects/dreamineering/_shared/templates/partials/**/*.hbs'
                              ],
  fetchSitePages          :   [
                                './src/projects/dreamineering/_shared/templates/pages/**/*.hbs'
                              ],
  metalsmithCollections   :   {
                                sheets: { pattern: 'sheets.json' },
                                externalProvoke: { pattern: 'haiku/_loop_external/provoke/*.md', sortBy: 'flow' },
                                externalAffirm: { pattern: 'haiku/_loop_external/affirm/*.md', sortBy: 'flow' },
                                internalProvoke: { pattern: 'haiku/_loop_internal/provoke/*.md', sortBy: 'flow' },
                                internalAffirm: { pattern: 'haiku/_loop_internal/affirm/*.md', sortBy: 'flow' },
                                problems: { pattern: 'philosophy/problems/details/*.md', sortBy: 'belief', reverse: true },
                                haikuPersonal: { pattern: 'haiku/personal/provoke/*.md' },
                                haikuStartups: { pattern: 'haiku/startups/provoke/*.md' },
                                haikuWebDesign: { pattern: 'haiku/web-design/provoke/*.md' },
                                haikuWriting: { pattern: 'haiku/writing/provoke/*.md' }
                              }
}
