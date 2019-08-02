import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import auth from './auth'
// import fbConfig from './fbConfig'
import common from './common'

Vue.use(Vuex)

// const vSSFBConfig = new VuexPersist({
//   key: 'fbConfig',
//   storage: window.sessionStorage,
//   reducer: state => ({
//     fbConfig: state.fbConfig
//   })
// })

const vSSCurrentUser = new VuexPersist({
  key: 'auth',
  storage: window.sessionStorage,
  reducer: state => ({
    auth: state.auth
  })
})
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      common
    },
    plugins: [
      vSSCurrentUser.plugin
    ],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  })
  return Store
}
