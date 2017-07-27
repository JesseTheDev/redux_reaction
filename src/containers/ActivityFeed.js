import React from 'react'
import { connect } from 'react-redux'
import { getActivity } from '../actions'

let ActivityFeed = ({ dispatch }) => {
    let activity = dispatch(getActivity())
    console.log(activity)
    return (
        <div>
            hey
        </div>
    )
}

ActivityFeed = connect()(ActivityFeed)

export default ActivityFeed
