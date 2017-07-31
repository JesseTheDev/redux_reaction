import {
    CHANGE_FORM, LOGIN_USER_REQUESTED, LOGIN_USER_SUCCEEDED, USER_IS_LOGGED_IN, LOGOUT_USER
} from '../actionTypes'

let initialState = {
    loginData: {
        email: '',
        password: ''
    },
    isLoggedIn: false,
    isLoggingIn: false
}

export default function authenticate(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM:
            return {...state, loginData: action.loginData}
        case LOGIN_USER_SUCCEEDED:
            return {...state, loginData: {email: '', password: ''}, isLoggedIn: action.isLoggedIn}
        case USER_IS_LOGGED_IN:
            return {...state, isLoggedIn: true}
        case LOGIN_USER_REQUESTED:
            return {...state, isLoggingIn: true}
        case LOGOUT_USER:
            delete localStorage.token
            delete localStorage.user
            return {...state, isLoggedIn: false}
        default:
            return state
    }
}
