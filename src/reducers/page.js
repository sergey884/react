import {
	ITEMS_GET_REQUEST, 
	ITEMS_GET_FAILURE, 
	ITEMS_GET_SUCCESS
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
			var newState =  Object.assign({}, state, {
				items : action.payload
			});
			return newState;
		case ITEMS_GET_SUCCESS:
		default : 
			return state;
	}
}