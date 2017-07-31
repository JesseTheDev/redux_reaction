import fetch from 'isomorphic-fetch'
import { REQUEST_ACTIVITY, RECEIVE_ACTIVITY } from '../actionTypes'

function requestActivity() {
    return {
        type: REQUEST_ACTIVITY
    }
}

function receiveActivity(json) {
    return {
        type: RECEIVE_ACTIVITY,
        activity: json,
        receivedAt: Date.now()
    }
}

function fetchActivity() {
    return dispatch => {
        dispatch(requestActivity())
        return fetch(`http://dockerhost:8080/react_test_activity`)
            .then(response => response.json())
            .then(json => dispatch(receiveActivity(json)))
    }
}

function shouldFetchActivity(state) {
    const networkActivity = state.networkActivity
    if (networkActivity.isFetching || !networkActivity) {
        return false;
    }
    return true;
}

export function fetchActivityIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchActivity(getState())) {
            return dispatch(fetchActivity())
        }
    }
}
