import { connect } from 'react-redux'
import { onAction } from '../actions'
import Intro from '../components/intro'

const mapStateToProps = (state, ownProps) => ({
  text: 'Action'
})

const mapDispatchToProps = {
  onClick: (onAction)
}

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)

export default IntroContainer
