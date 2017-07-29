import {
    REQUEST_ACTIVITY,
    RECEIVE_ACTIVITY
} from '../actionTypes'

export default function networkActivity(state = {isFetching: false, activity: [], lastUpdated: null}, action) {
    switch (action.type) {
        case REQUEST_ACTIVITY:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_ACTIVITY:
            return Object.assign({}, state, {
                isFetching: false,
                activity: action.activity,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}
