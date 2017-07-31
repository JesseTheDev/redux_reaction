import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'
import Header from '../components/Header'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { userIsLoggedIn } from '../actions/authenticate'

const contentStyle = {
  padding: '80px 15px 15px',
  maxWidth: '600px'
}

class Login extends Component {
  componentWillMount() {
      const { dispatch } = this.props

      if(this.props.isLoggedIn)
      this.props.history.push('/')
      if(localStorage.token != null && localStorage.user != null)
  dispatch(userIsLoggedIn())
  }
  componentWillReceiveProps(nextProps) {
      if(nextProps.isLoggedIn)
          nextProps.history.push('/')
  }
  componentDidMount() {
      console.log(this.props, 'did')
      if(this.props.isLoggedIn)
      this.props.history.push('/')
  }
  render() {
    const { email, password, isLoggedIn, dispatch, history } = this.props

    return (
      <div>
        <Header />
        <div style={contentStyle}>
          <h1>Login</h1>
          <LoginForm email={email} password={password} dispatch={dispatch} isLoggedIn={isLoggedIn} history={history}/>
        </div>
      </div>
    )
  }

}


function mapStateToProps(state) {
  const { email, password } = state.authenticate.loginData
  const { isLoggedIn } = state.authenticate
  return {
    email,
    password,
    isLoggedIn
  }
}

export default connect(mapStateToProps)(Login)
