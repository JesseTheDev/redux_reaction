import React from 'react'
import { connect } from 'react-redux'
import { getActivity } from '../actions'

let ActivityFeed = ({ dispatch }) => {
    return (
      <div>
        hey
      </div>
    )
}

ActivityFeed = connect()(ActivityFeed)

export default ActivityFeed
