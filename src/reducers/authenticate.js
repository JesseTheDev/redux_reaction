import {
    CHANGE_FORM
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
    default:
      return state
  }
}
