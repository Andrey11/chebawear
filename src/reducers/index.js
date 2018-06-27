import { combineReducers } from 'redux'

import user from './user'
import collections from './collections'

const rootReducer = combineReducers({
  user,
  collections
})

export default rootReducer
