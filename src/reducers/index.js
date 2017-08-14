'use strict';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as uiReducer } from 'redux-ui'
import page from './page';
import item from './item';

export default combineReducers({
	routing: routerReducer,
	ui : uiReducer,
	page,
	item
});