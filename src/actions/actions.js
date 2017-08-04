'use strict';
import {
	ITEMS_GET_REQUEST, 
	ITEMS_GET_FAILURE, 
	ITEMS_GET_SUCCESS,
	DELETE_ITEM
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

export function pageItem(item) {
	return {
		type : 	DELETE_ITEM,
		payload : item
	}
}

export function deletePageItem(item) {
	return dispatch => {
		dispatch(pageItem(item));
	}
}

export function getItems(url) {
	return dispatch => {
		dispatch(getRequest());
		return  fetch(url)
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