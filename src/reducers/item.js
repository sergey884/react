'use strict';
import {
	DETAILS_GET_REQUEST, 
	DETAILS_GET_FAILURE, 
	DETAILS_GET_SUCCESS 
	} from '../constants/Item';
	
const initialState = {
	menu_items : {
		
	}
};

export default function item(state = initialState, action) {
	switch(action.type) {
		case DETAILS_GET_SUCCESS: 
			var newObj = action.payload;
			return Object.assign({}, state, {
				menu_items : {
					[newObj.category.short_name] : newObj.menu_items
				}
			});
		default : 
			return state;
	}
}