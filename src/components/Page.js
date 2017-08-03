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
		const items = this.props.items;
		const listItem = items.map((item) => {
			return (<Item name={item.name} id={item.id} key={item.id} />);
		});

		return (
			<ul>{listItem}</ul>
		);
  }
}

Page.propTypes = {
	items : PropTypes.array.isRequired
}
