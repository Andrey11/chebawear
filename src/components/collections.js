import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity } from 'react-native';

import BackgroundImage from './backgroundImage';

// const propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   clearState: PropTypes.func.isRequired,
//   signUpUser: PropTypes.func.isRequired,
//   authError: PropTypes.string.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <BackgroundImage>
        <Text style={localstyles.text_color}>Collections</Text>
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

// Signup.propTypes = propTypes;
// Signup = reduxForm({ form: 'signup', validate })(Signup);

export default Collections;
