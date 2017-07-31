import fetch from 'isomorphic-fetch'
import FormData from 'isomorphic-form-data'
import { CHANGE_FORM, LOGIN_USER_REQUESTED, LOGIN_USER_SUCCEEDED, USER_IS_LOGGED_IN, LOGOUT_USER } from '../actionTypes'

export function changeForm(loginData){
  return {
    type: CHANGE_FORM,
    loginData: loginData
  }
}

function loginUserRequested(){
  return {
    type: LOGIN_USER_REQUESTED
  }
}

function loginUserSucceeded(){
  return {
    type: LOGIN_USER_SUCCEEDED,
    isLoggedIn: true
  }
}
export function loginUser(email, password){
  return (dispatch) => {
    return dispatch(authenticate(email, password))
  }
}

export function userIsLoggedIn(){
    return{
        type: USER_IS_LOGGED_IN
    }
}
function authenticate(email, password){
  let form = new FormData();
  form.append('email',email)
  form.append('password', password)
  return dispatch => {
    dispatch(loginUserRequested())
    return fetch(`http://dockerhost:8080/api/authenticate`, {
      method: 'POST',
      body: form
    })
      .then(response => response.json())
      .then(json => {
        localStorage.token = json.token
        localStorage.user = JSON.stringify(json.user)
        dispatch(loginUserSucceeded())
      })
  }
}
export function logoutUser(){
    return {
        type: LOGOUT_USER
    }
}
