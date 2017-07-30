import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import DevTools from './containers/DevTools'
import App from './containers/App'
import Login from './containers/Login'
import store from './configureStore'
import isLoggedIn from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default (
  <div>
    <PrivateRoute path="/" exact component={App} />
    <Route path="/login" component={Login} />
    <DevTools />
  </div>
)
