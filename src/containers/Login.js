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

    return (
      <div>
        <Header />
        <div style={contentStyle}>
          <LoginForm />
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
