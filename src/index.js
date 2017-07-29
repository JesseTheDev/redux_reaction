import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './containers/App'
import DevTools from './containers/DevTools'

const store = configureStore()
injectTapEventPlugin()

render (
  <Provider store={store}>
    <div>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)
