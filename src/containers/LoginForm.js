import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { changeForm, loginUser } from '../actions/authenticate'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class LoginForm extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.isLoggedIn)
      nextProps.history.push('/')
  }
  render() {
    const { email, password } = this.props
    return (
      <Card>
        <CardHeader
            title="Login"
            subtitle="Login With VA Creds"
        />
        <CardText>
        <form onSubmit={this.submitLogin.bind(this)}>
          <TextField
            hintText="Email"
            type="text"
            value={email}
            onChange={this.changeEmail.bind(this)}
          />
          <TextField
            hintText="Password"
            type="password"
            value={password}
            onChange={this.changePassword.bind(this)}
            style={{float: 'right'}}
          />
          <RaisedButton label="Login" primary={true} type="submit" onClick={this.submitLogin.bind(this)} />
        </form>
        </CardText>
      </Card>

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
