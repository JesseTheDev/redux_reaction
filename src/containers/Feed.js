import React from 'react'
import Activity from '../components/Activity'

const Feed = ({ activity, isFetching }) => (
  <div>
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
      </div>
    }
  </div>
)

export default Feed












