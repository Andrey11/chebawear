import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native'

import BackgroundImage from './backgroundImage'

export default class AppLoadingScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initializeFirebase(this.props.navigation)
  }

  render() {
    return (
      <BackgroundImage>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </BackgroundImage>
    )
  }
}

const localstyles = StyleSheet.create({
  text_color: {
    flex: 1,
    color: 'rgba(255, 255, 255, 1)'
  },

})
//
AppLoadingScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  initializeFirebase: PropTypes.func.isRequired,
}
