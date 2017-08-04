import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
	constructor(props) {
		super(props);
		this.deleteItem = this.deleteItem.bind(this);
	}
	
	deleteItem(item) {
		const {deletePageItem} = this.props;
		deletePageItem(item);
	}
	
	render() {
		const {item} = this.props;
		return (
			<li key={item.id}>
				{item.name}
				<button onClick={() => this.deleteItem(item)}>Delete item {item.short_name}</button>
			</li>
		); 
	}
}

Item.propTypes = {
	id : PropTypes.number,
	name : PropTypes.string
};
export default Item;