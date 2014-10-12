module.exports = {
  ghpages                 :   'ghpages/[your-domain]/landing',
  baseURL                 :   'landing.[your-domain].[whatever]',
  contentDir              :   './src/domain/[your-domain]/siteLanding/markdown/',
  sheets                  :   ['18DBzR_PPd06WmQfv6Ky_pa81-opNKahykcDzBIlzhdM'],
  browserifyEntry         :   './src/domain/[your-domain]/siteLanding/js/index.js',
  styleEntry              :   './src/domain/[your-domain]/siteLanding/style/main.css',
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
                                './src/domain/[your-domain]/siteLanding/js/**/*.js'
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
                                sheets: { pattern: 'sheets.json' }
                              }
}
