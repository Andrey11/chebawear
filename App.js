// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './src/home';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/index.js';

export default class Chebawear extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('Chebawear', () => App);
