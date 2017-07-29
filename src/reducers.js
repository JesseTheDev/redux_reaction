import { combineReducers } from 'redux'
import networkActivity from './reducers/networkActivity'
import authenticate from './reducers/authenticate'

const rootReducer = combineReducers({
    networkActivity,
    authenticate
})

export default rootReducer
