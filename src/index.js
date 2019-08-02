/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendQuasarConf = function (conf) {
  // make sure qfirebase boot file is registered
  conf.boot.push('~quasar-app-extension-qfirebase/src/boot/qfirebase.js')
  console.log(` App Extension (qfirebase) Info: 'Adding qfirebase boot reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  // quasar compatibility check
  api.compatibleWith('@quasar/app', '^1.0.0')

  api.extendQuasarConf(extendQuasarConf)
}
