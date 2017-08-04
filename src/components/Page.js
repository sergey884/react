import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default class Page extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps");
	}
	
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}
	
	render() {
		console.log(this.props);
		const {items, deletePageItem} = this.props;
		const listItem = items.map((item) => {
			return (<Item item={item} 
						  key={item.id} 
						  deletePageItem={deletePageItem}/>);
		});

		return (
			<ul>{listItem}</ul>
		);
  }
}

Page.propTypes = {
	items : PropTypes.array.isRequired
}
