import {
    CHANGE_FORM
} from '../actionTypes'

export default function authenticate(state = {loginData: {email: '', password: ''}}, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return Object.assign({}, state, {loginData: action.loginData})
    default:
      return state
  }
}
