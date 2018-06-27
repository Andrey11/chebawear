import { connect } from 'react-redux'
import { initializeFirebase } from '../actions'

import AppLoadingScreen from '../components/appLoadingScreen'

const mapStateToProps = (state, ownProps) => ({
  loading: true,
})

const mapDispatchToProps = {
  initializeFirebase: initializeFirebase,
}

const AppLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLoadingScreen)

export default AppLoadingContainer
