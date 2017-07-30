import {
    CHANGE_FORM, LOGIN_USER_REQUESTED, LOGIN_USER_SUCCEEDED
} from '../actionTypes'

let initialState = {
  loginData: {
    email: '',
    password: ''
  },
  isLoggedIn: false
}
export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return Object.assign({}, state, {loginData: action.loginData})
    case LOGIN_USER_SUCCEEDED:
      return Object.assign({}, state, {loginData: {email: '', password: ''}, isLoggedIn: action.isLoggedIn})
    default:
      return state
  }
}
