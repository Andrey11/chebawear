/* eslint-disable import/no-unresolved */
import firebaseConfig from './config/firebaseKeys.json'
import firebase from 'firebase'
import rootReducer from './reducers'

import React, { Component } from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import AppLoadingScreen from './containers/appLoadingContainer'
import IntroScreen from './containers/introContainer'
import SignUpScreen from './components/signUp'
import SignInScreen from './components/signIn'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

const AppStack = createStackNavigator({
  IntroScreen: IntroScreen,
  SignUpScreen: SignUpScreen,
}, {
  initialRouteName: 'IntroScreen',
})

const AuthStack = createStackNavigator({
  IntroScreen: IntroScreen,
  SignUpScreen: SignUpScreen,
  SignInScreen: SignInScreen,
}, {
  initialRouteName: 'SignInScreen',
})

const RootStack = createSwitchNavigator({
  AppLoadingScreen: AppLoadingScreen,
  Authentication: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'AppLoadingScreen',
})

class App extends Component {

  constructor(props) {
    super(props)

    this.onAuthStateChanged = this.onAuthStateChanged.bind(this)

    this.state = { loaded: false }
  }

  componentDidMount() {
    // firebase.initializeApp(firebaseConfig)
    // firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged (user) {
    if (user !== null) {

          // firebase.auth().onAuthStateChanged((user) => {
          //   this.setState({ loaded: true })
          //
          //   if (user) {
          //     // store.dispatch({ type: SIGN_IN_SUCCESS, payload: user })
          //   }
          // })
    }

  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

export default App
