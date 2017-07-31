import {
    REQUEST_ACTIVITY,
    RECEIVE_ACTIVITY
} from '../actionTypes'

let initialState = {
    isFetching: false,
    activity: [],
    lastUpdated: null
}

export default function networkActivity(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ACTIVITY:
            return {...state, isFetching: true}
        case RECEIVE_ACTIVITY:
            return {...state, isFetching: false, activity: action.activity, lastUpdated: action.receivedAt}
        default:
            return state
    }
}
