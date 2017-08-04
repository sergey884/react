'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import App from '../containers/App';

class Root extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {store} = this.props;
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path='/:filter?' component={App} />
				</Router>
			</Provider>
		);
	}
}

Root.propTypes = {
	store : PropTypes.object
};

export default Root;