'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class backgroundImage extends Component {

  render () {
    return (
      <View style={localstyles.component_body}>
        <View style={localstyles.background_image_wrapper}>
          <Image
            style={localstyles.background_image}
            source={require('../images/background-1.png')} />
        </View>
        <View style={localstyles.content_body}>
          {this.props.children}
        </View>
      </View>
    );


  }
}

const localstyles = StyleSheet.create({
  component_body: {
    flex: 1,
    backgroundColor: 'rgba(82, 170, 57, 1)',
  },

  background_image: {
    flex: 1,
    resizeMode: 'cover',
  },

  background_image_wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  content_body: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


AppRegistry.registerComponent('backgroundImage', () => backgroundImage);
