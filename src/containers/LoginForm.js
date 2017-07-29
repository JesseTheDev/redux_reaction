import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { changeForm, submitLogin } from '../actions'

class LoginForm extends Component {

  render() {
    const { email, password } = this.props
    return (
      <form onSubmit={this.submitLogin.bind(this)}>
        <input type="text" value={email} onChange={this.changeEmail.bind(this)}/><input type="text" value={password} onChange={this.changePassword.bind(this)}/><button type="submit">Go</button>
      </form>
    )
  }

  changeEmail(e){
    const { dispatch } = this.props
    dispatch(changeForm({email: e.target.value, password: this.props.password}))
  }
  changePassword(e){
    const { dispatch } = this.props
    dispatch(changeForm({email: this.props.email, password: e.target.value}))
  }
  submitLogin(e){
    const { dispatch } = this.props

    e.preventDefault();
    dispatch(submitLogin(this.props.email, this.props.password))
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default LoginForm
