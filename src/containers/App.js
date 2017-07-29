import React, { Component } from 'react'
import Header from '../components/Header'
import Feed from './Feed'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'

import { fetchActivityIfNeeded } from '../actions/activity'

const contentStyle = {
  padding: '80px 15px 15px',
  maxWidth: '600px'
}


class App extends Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchActivityIfNeeded())
  }

  render() {
    const { activity, isFetching } = this.props
    const { email, password } = this.props
    const { dispatch } = this.props

    return (
      <div>
        <Header />
        <div style={contentStyle}>
          <LoginForm email={email} password={password} dispatch={dispatch}/>
          <Feed activity={activity} isFetching={isFetching} />
        </div>
      </div>
    )
  }

}


function mapStateToProps(state) {
  const { isFetching, activity } = state.networkActivity
  const { email, password } = state.authenticate.loginData
  return {
    activity,
    isFetching,
    email,
    password
  }
}

export default connect(mapStateToProps)(App)
