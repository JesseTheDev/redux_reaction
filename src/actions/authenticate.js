import fetch from 'isomorphic-fetch'
import FormData from 'isomorphic-form-data'
import { CHANGE_FORM } from '../actionTypes'

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
      .then(json => {
        localStorage.token = json.token
        localStorage.user = JSON.stringify(json.user)
      })
  }
}
