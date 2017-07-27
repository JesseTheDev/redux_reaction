import React from 'react'
import Header from './Header'
import SignIn from '../containers/SignIn'
import ActivityFeed from '../containers/ActivityFeed'


const App = () => (
  <div>
    <Header />
    <div style={{padding: '15px'}}>
      <SignIn />
      <hr/>
      <ActivityFeed />
    </div>
  </div>
)

export default App
