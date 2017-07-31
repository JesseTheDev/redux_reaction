import React from 'react'
import Activity from '../components/Activity'
import Logout from './Logout'

const Feed = ({ activity, isFetching }) => (
    <div>
        <Logout />
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
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && activity.length === 0 && <h2>Empty.</h2>}
    </div>
)

export default Feed
