import firebase from 'firebase'
import firebaseConfig from '../config/firebaseKeys.json'


export const NAVIGATE_TO_COLLECTIONS = 'NAVIGATE_TO_COLLECTIONS'
export const navigateToCollections = (options) => (dispatch, getState) => {
  var test = dispatch
  var test1 = getState
  var test2 = options

  dispatch({type: NAVIGATE_TO_COLLECTIONS})
}

export const NAVIGATE_TO_SIGN_IN = 'NAVIGATE_TO_SIGN_IN'
export const navigateToSignIn = (options) => (dispatch, getState) => {
  var test = dispatch
  var test1 = getState
  var test2 = options

  dispatch({type: NAVIGATE_TO_SIGN_IN})
}

export const NAVIGATE_TO_SIGN_UP = 'NAVIGATE_TO_SIGN_UP'
export const navigateToSignUp = (options) => (dispatch, getState) => {
  var test = dispatch
  var test1 = getState
  var test2 = options

  dispatch({type: NAVIGATE_TO_SIGN_UP})
}

export const INIT_FIREBASE = 'INIT_FIREBASE'
export const initializeFirebase = (navigation) => (dispatch, getState) => {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // store.dispatch({ type: SIGN_IN_SUCCESS, payload: user })
      navigation.navigate('App')
    } else {
      navigation.navigate('Authentication')
    }
  })

  dispatch({type: INIT_FIREBASE})
}
