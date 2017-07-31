import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import DevTools from './containers/DevTools'
import App from './containers/App'
import Login from './containers/Login'
import store from './configureStore'
import EnsureAuth from './auth'

export default (
  <div>
    <Route path="/" exact component={EnsureAuth(App)} />
    <Route path="/login" component={Login} />
    <DevTools />
  </div>
)
