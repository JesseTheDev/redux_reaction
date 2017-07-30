import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { changeForm, loginUser } from '../actions/authenticate'

class LoginForm extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.isLoggedIn)
      this.props.history.push('/')
  }
  render() {
    const { email, password } = this.props
    return (
      <form onSubmit={this.submitLogin.bind(this)}>
        <input type="text" value={email} onChange={this.changeEmail.bind(this)}/>
        <input type="text" value={password} onChange={this.changePassword.bind(this)}/>
        <button type="submit" onClick={this.submitLogin.bind(this)}>Go</button>
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
    dispatch(loginUser(this.props.email, this.props.password))
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default LoginForm
