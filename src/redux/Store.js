import { createStore, combineReducers } from 'redux';
import News from './reducers/News.js';

const store = createStore(combineReducers({ News }), {});

export default store;
