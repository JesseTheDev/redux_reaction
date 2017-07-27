import React from 'react'
import { connect } from 'react-redux'
import { getActivity } from '../actions'
import Activity from '../components/Activity'

let ActivityFeed = ({ dispatch }) => {
    /* get dummy activity data */
    let activity = dispatch(getActivity()).data
     
    /* loop through and render it in the activity component */
    console.log(activity)
    return (
      <div>
        {activity.map((item, key) =>
          <Activity
            key={key}
            item={item}
          />
        )}
      </div>
    )
}

ActivityFeed = connect()(ActivityFeed)

export default ActivityFeed