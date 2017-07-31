import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import vaReactRedux from '../reducers/index';

const store = createStore(vaReactRedux, {}, applyMiddleware(thunk, logger));
export default store;
