import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {id, name} = this.props;
		return (
			<li key={id}>{name}</li>
		); 
	}
}

Item.propTypes = {
	id : PropTypes.number,
	name : PropTypes.string
};
export default Item;