import React, { Component } from 'react'
import Header from '../components/Header'
import Activity from '../components/Activity'
import { connect } from 'react-redux'

import { fetchActivityIfNeeded } from '../actions'


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
        <p>
          { lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
        </p>
        {isFetching && activity.length === 0 && <h2>Loading...</h2>}
        {!isFetching && activity.length === 0 && <h2>Empty.</h2>}
        {activity.length > 0 &&
          <div>
            {activity.map((item, key) =>
              <Activity
                key={key}
                item={item}
              />
            )}
          </div>}
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