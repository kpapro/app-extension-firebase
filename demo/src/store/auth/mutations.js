export const SET_CURRENT_USER = (state, data) => {
  state.currentUser = data
}

export const SET_FIREBASE_CONFIG = (state, data) => {
  state.firebaseConfig = data
}

export const SET_FIREBASE_INIT_FLAG = (state, data) => {
  state.fbAppInitialized = data
}
