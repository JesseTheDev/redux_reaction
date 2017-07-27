import { combineReducers } from 'redux'
import signIn from './signIn'
import networkActivity from './networkActivity'

const reducers = combineReducers({
    signIn,
    networkActivity
})

export default reducers
