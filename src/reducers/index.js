'use strict';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import page from './page';
import item from './item';

export default combineReducers({
	routing: routerReducer,
	page,
	item
});