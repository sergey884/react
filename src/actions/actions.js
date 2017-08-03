'use strict';
import {
	ITEMS_GET_REQUEST, 
	ITEMS_GET_FAILURE, 
	ITEMS_GET_SUCCESS
} from '../constants/Page';

export function getRequest() {
	return {
		type : ITEMS_GET_REQUEST
	}
}

export function requestFailed(error) {
	return {
		type : ITEMS_GET_FAILURE,
		paylod : error
	}
}

export function requestSuccess(data) {
	return {
		type : ITEMS_GET_SUCCESS,
		payload : data
	}
}

export function getItems() {
	return dispatch => {
		dispatch(getRequest());
		return  fetch('https://davids-restaurant.herokuapp.com/categories.json')
			.then((response) => {
				if(response.status == 200) {
					return response.json()
				}
				dispatch(requestFailed(new Error('Response was not ok.')))
			})
			.then((items) => {
				dispatch(requestSuccess(items));
			})
			.catch((error) => {
				console.log(error);
			})
	}
}