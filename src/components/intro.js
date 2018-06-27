import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import BackgroundImage from './backgroundImage';

export default class Intro extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <BackgroundImage>
        <Text style={localstyles.text_color}>INTRO</Text>
        <Button
          title={this.props.text}
          // onPress={() => this.props.navigation.navigate('SignUp')}
          onPress={() => this.props.onClick(this.props.navigation)}
        />
      </BackgroundImage>
    );
  }
}

const localstyles = StyleSheet.create({
  component_body: {
    flex: 1,
    backgroundColor: 'rgba(82, 170, 57, 1)',
  },

  text_color: {
    flex: 1,
    color: 'rgba(255, 255, 255, 1)'
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },

});

Intro.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
// Signup = reduxForm({ form: 'signup', validate })(Signup);
