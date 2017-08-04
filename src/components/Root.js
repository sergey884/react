'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { hashHistory  } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../containers/App';
import { createBrowserHistory } from 'history';

class Root extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const {store} = this.props;
		const his = syncHistoryWithStore(createBrowserHistory(), store);
		return (
			<Provider store={store}>
				<Router history={his}>
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