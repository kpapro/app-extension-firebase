import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

let authInitialized = false
let authPromise

class FirebaseService {
  createUser

  constructor () {
    // firebase.initializeApp(process.env.firebaseConfig)
    console.log('Firebase Loaded')
    // this.ensureAuthIsInitialized()
  }

  auth () {
    return firebase.auth()
  }

  async ensureAuthIsInitialized () {
    // If auth is currently initializing, return that promise
    if (authPromise) {
      return authPromise
    }

    // Create the initialization promise
    authPromise = new Promise((resolve, reject) => {
      if (authInitialized) {
        resolve()
      } else {
        // Create the observer only once on init
        firebase.auth().onAuthStateChanged(async user => {
          this.currentUser = user
          authInitialized = true

          resolve()
        }, error => reject(error))
      }
    })

    return authPromise
  }

  fBInit (config) {
    return firebase.initializeApp(config)
  }

  firestore () {
    return firebase.firestore()
  }

  getGeoPoint (lat, lon) {
    return new firebase.firestore.GeoPoint(lat, lon)
  }

  recaptcha (id) {
    return new firebase.auth.RecaptchaVerifier(id, {
      'size': 'invisible',
      'callback': (response) => {
        // this.registerNumber()
      }
    })
  }

  storage () {
    return firebase.storage()
  }

  logoutUser () {
    return this.auth().signOut()
  }

  async loginWithEmail (email, password) {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    return user
  }

  async registerUserWithEmail (email, password) {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return user
  }

  registerUserWithPhoneNumber (phoneNumber, appVerifier) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          resolve(confirmationResult)
        })
        .catch(error => console.log('Error: ', error))
    })
  }

  // updateUser (payload) {
  //   return new Promise((resolve, reject) => {
  //     const userRef = firebase.firestore().collection('users').doc(payload.id)
  //     const userObject = {

  //     }
  //     userRef.update(userObject)
  //       .then((data) => {
  //         resolve()
  //       })
  //       .catch(err => {
  //         console.error('UPDATEING USERS COLLECTION FAILURE: ', err)
  //         reject()
  //       })
  //   })
  // }
}

export default new FirebaseService()
