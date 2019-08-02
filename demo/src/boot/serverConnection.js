import firebaseService from '../services/FirebaseService'
import {
  firestorePlugin
} from 'vuefire'
export default ({
  store,
  Vue
}) => {
  Vue.use(firestorePlugin)
  Vue.prototype.$fb = firebaseService
}
