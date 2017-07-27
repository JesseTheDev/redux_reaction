import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions'

let SignIn = ({ dispatch }) => {
    let email, password

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          console.log(email.value, password.value, 'yerp')
          if (!email.value.trim() || !password.value.trim()) {
            return
          }
          dispatch(signIn(email.value.trim(), password.value.trim()))
          email.value = ''
          password.value = ''
        }}>
          <label>Email</label>
          <input ref={node => {
            email = node
          }} />
          <label>Password</label>
          <input ref={node => {
            password = node
          }} />
          <button type="submit">
            Sign In
          </button>
        </form>
      </div>
    )
}

SignIn = connect()(SignIn)

export default SignIn
