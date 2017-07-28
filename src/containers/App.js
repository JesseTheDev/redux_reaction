import React, { Component } from 'react'
import Header from '../components/Header'
import Feed from './Feed'
import { connect } from 'react-redux'

import { fetchActivityIfNeeded } from '../actions'

const contentStyle = {
  padding: '80px 15px 15px'
}


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchActivityIfNeeded())
  }

  render() {
    const { activity, isFetching } = this.props
    return (
      <div>
        <Header />
        <div style={contentStyle}>
          <Feed activity={activity} isFetching={isFetching} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.networkActivity)
  const { isFetching, activity } = state.networkActivity

  return {
    activity,
    isFetching
  }
}

export default connect(mapStateToProps)(App)