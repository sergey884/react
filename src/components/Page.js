'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import ui from 'redux-ui';


@ui({
	state : {
		items : []
	}
})

export default class Page extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps");
	}
	
	componentWillUpdate(nextProps) {
		console.log("componentWillUpdate", nextProps);
		const { items } = nextProps;
        this.props.updateUI('items', items);
	}
	
	render() {
		const {items, deletePageItem} = this.props;
		console.log(this.props.ui);

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
	items : PropTypes.array.isRequired,
	deletePageItem : PropTypes.func.isRequired
}
