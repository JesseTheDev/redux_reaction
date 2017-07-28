import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import DevTools from './containers/DevTools';

const loggerMiddleware = createLogger()
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  DevTools.instrument()
)

export default function configureStore(preloadedState) {
  const store = createStore( rootReducer, preloadedState, enhancer )

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}