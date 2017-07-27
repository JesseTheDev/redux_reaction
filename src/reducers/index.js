import { combineReducers } from 'redux'
import signIn from './signIn'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  signIn,
  todos,
  visibilityFilter
})

export default todoApp
