import fetch from 'isomorphic-fetch'
require('isomorphic-form-data')
export const REQUEST_ACTIVITY = 'REQUEST_ACTIVITY'
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY'
export const CHANGE_FORM = 'CHANGE_FORM'
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export function changeForm(loginData){
  return {
    type: CHANGE_FORM,
    loginData: loginData
  }
}

export function submitLogin(email, password){
  return (dispatch) => {
    return dispatch(authenticate(email, password))
  }
}

function authenticate(email, password){
  let form = new FormData();
  form.append('email',email)
  form.append('password', password)
  return dispath => {
    return fetch(`http://dockerhost:8080/api/authenticate`, {
      method: 'POST',
      body: form})
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
function requestActivity() {
  return {
    type: REQUEST_ACTIVITY
  }
}

function receiveActivity(json) {
  console.log('json', json)
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
