/* eslint-disable import/no-unresolved */
import firebaseConfig from './config/firebaseKeys.json';
import firebase from 'firebase';
import rootReducer from './reducers';

import { createStackNavigator } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Intro from './containers/introContainer'
import SignUp from './components/signUp'

import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

const RootStack = createStackNavigator(
  {
    Intro: Intro,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'Intro',
  }
);

class App extends Component {

  constructor(props) {
    super(props);

    this.onAuthStateChanged = this.onAuthStateChanged.bind(this);

    this.state = { loaded: false };
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged (user) {
    if (user !== null) {

          // firebase.auth().onAuthStateChanged((user) => {
          //   this.setState({ loaded: true });
          //
          //   if (user) {
          //     // store.dispatch({ type: SIGN_IN_SUCCESS, payload: user });
          //   }
          // });
    }

  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
