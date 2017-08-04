'use strict';
import {
	ITEMS_GET_REQUEST, 
	ITEMS_GET_FAILURE, 
	ITEMS_GET_SUCCESS,
	DELETE_ITEM
} from '../constants/Page';

const initialState = {
  items : []
}

export default function page(state = initialState, action) {
	if (typeof state === 'undefined') {
		return initialState;
	}
	switch(action.type) {
		case ITEMS_GET_SUCCESS: 
			return Object.assign({}, state, {
				items : action.payload
			});
		case DELETE_ITEM:
			var newStateAfterDelete = Object.assign({}, state);
			var newItems = newStateAfterDelete.items.filter((item) => action.payload != item);
			return Object.assign({}, state, {
				items : newItems
			});
		default : 
			return state;
	}
}