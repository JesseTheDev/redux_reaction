import React, { Component } from 'react'
import Header from '../components/Header'
import Feed from './Feed'
//import LoginForm from './LoginForm'
import { connect } from 'react-redux'

import { fetchActivityIfNeeded, changeForm } from '../actions'

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
    const { email } = this.props
    return (
      <div>
        <Header />
        <div style={contentStyle}>
        <input type="text" value={email} onChange={this.changeForm.bind(this)}/><button >Go</button>
          <Feed activity={activity} isFetching={isFetching} />
        </div>
      </div>
    )
  }

  changeForm(e){
    const { dispatch } = this.props
    dispatch(changeForm(e.target.value))
  }
}


function mapStateToProps(state) {
  const { isFetching, activity } = state.networkActivity
  const { email } = state.login
  return {
    activity,
    isFetching,
    email
  }
}

export default connect(mapStateToProps)(App)
