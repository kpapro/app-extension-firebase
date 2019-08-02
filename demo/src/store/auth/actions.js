import $fb from '../../services/FirebaseService.js'

export const createNewUser = ({ commit }, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await $fb.registerUserWithEmail(data.email, data.password)
      commit('SET_CURRENT_USER', $fb.auth().currentUser)
      console.log('CURRENT USER FROM FIREBASE: ', $fb.auth().currentUser)
      resolve()
    } catch (err) {
      console.error('ERROR NEW USER CREATION', err)
      reject()
    }
  })
}

export const loginUser = ({ commit }, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await $fb.loginWithEmail(data.email, data.password)
      commit('SET_CURRENT_USER', $fb.auth().currentUser)
      console.log('CURRENT USER FROM FIREBASE: ', $fb.auth().currentUser)
      resolve()
    } catch (err) {
      console.error('ERROR LOGIN USER', err)
      reject()
    }
  })
}

export const logoutUser = async ({ commit }) => {
  try {
    await $fb.logoutUser()
    commit('SET_CURRENT_USER', null)
    return
  } catch (err) {
    return Error('Logout error', err)
  }
}
