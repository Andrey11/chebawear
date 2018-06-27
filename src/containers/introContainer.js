import { connect } from 'react-redux'
import { navigateToCollections,
         navigateToSignIn,
         navigateToSignUp } from '../actions'
         
import Intro from '../components/intro'

const mapStateToProps = (state, ownProps) => ({
  signUpButtonText: 'Join Club',
  signInButtonText: 'Sign In',
  shopButtonText: 'View Collections'
})

const mapDispatchToProps = {
  onViewCollectionsPress: navigateToCollections,
  onSignInPress: navigateToSignIn,
  onSignUpPress: navigateToSignUp
}

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)

export default IntroContainer
