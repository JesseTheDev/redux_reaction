import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import configureStore from './configureStore'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const store = configureStore()
injectTapEventPlugin()

render (
  <Provider store={store}>
    <Router>
      <div>
        <MuiThemeProvider>
          {routes}
        </MuiThemeProvider>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
