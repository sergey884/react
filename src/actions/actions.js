'use strict';
import {
	ITEMS_GET_REQUEST, 
	ITEMS_GET_FAILURE, 
	ITEMS_GET_SUCCESS,
	DELETE_ITEM
} from '../constants/Page';

export const getRequest = () =>
	({
		type : ITEMS_GET_REQUEST
	})

export const requestFailed = (error) =>
	({
		type : ITEMS_GET_FAILURE,
		paylod : error
	})

export const requestSuccess = (data) =>
	({
		type : ITEMS_GET_SUCCESS,
		payload : data
	})

export const pageItem = (item) =>
	({
		type : 	DELETE_ITEM,
		payload : item
	})

export const deletePageItem = item => dispatch => {
	dispatch(pageItem(item));
}

export const getItems = url => dispatch => {
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