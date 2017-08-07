'use strict';
import React, { Component } from 'react';
import DetailsItem from './DetailsItem';

class Details extends Component {
	constructor(props) {
		super(props);
	}
	
	componentsWillReceiveProps(newProps) {
		console.log("Details: componentsWillReceiveProps");
	}
	
	componentDidMount() {
		let url = 'https://davids-restaurant.herokuapp.com/menu_items.json';
		const {getDetailsInfo, short_name, id} = this.props;
		getDetailsInfo(url, short_name);
	}
	
	render() {
		const {short_name, menu_items = {}} = this.props;
		let itemsArr = menu_items[short_name];
		if (!itemsArr) itemsArr = [];

		const listArrItem = itemsArr.map((item) => {
			return (<DetailsItem key={item.id}
								 id={item.id}
								 name={item.name} />)
		});
		return (
			<ul>
				{listArrItem}
			</ul>
		);
	}
}

export default Details;