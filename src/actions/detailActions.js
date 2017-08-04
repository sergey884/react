'use strict';
import {
	DETAILS_GET_REQUEST, 
	DETAILS_GET_FAILURE, 
	DETAILS_GET_SUCCESS 
} from '../constants/Item';

export function getDetailsRequest() {
	return {
		type : DETAILS_GET_REQUEST
	}
}

export function requestDetailsFailed(error) {
	return {
		type : DETAILS_GET_FAILURE,
		paylod : error
	}
}

export function requestDetailsSuccess(data) {
	return {
		type : DETAILS_GET_SUCCESS,
		payload : data
	}
}

export function getDetailsInfo(url, shortName) {
	return dispatch => {
		dispatch(getDetailsRequest());
		return  fetch(url + '?category=' + shortName)
			.then((response) => {
				if(response.status == 200) {
					return response.json();
				}
				dispatch(requestDetailsFailed(new Error('Response was not ok.')))
			})
			.then((items) => {
				dispatch(requestDetailsSuccess(items));
			})
			.catch((error) => {
				console.log(error);
			})
	}
}