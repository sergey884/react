import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default class Page extends Component {
  render() {
    const items = this.props.items;
	if (items) {
		var listItem = items.map((item) => {
			return (<Item name={item.name} id={item.id} key={item.id} />);
		});
	} else {
		listItem = [];
	}
    return (
		<ul>
			{listItem}
		</ul>
	)

  }
}

Page.propTypes = {
	items : PropTypes.array
}
