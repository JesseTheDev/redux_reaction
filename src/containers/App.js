import React, { Component } from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import { connect } from 'react-redux'

import { fetchActivityIfNeeded } from '../actions'

const contentStyle = {
  padding: '15px'
}


class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchActivityIfNeeded())
  }

  render() {
    const { activity, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Header />
        <div style={contentStyle}>
          <p>
            { lastUpdated &&
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </span>
            }
          </p>
          <Feed activity={activity} isFetching={isFetching} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.networkActivity)
  const { isFetching, lastUpdated, activity } = state.networkActivity

  return {
    activity,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)