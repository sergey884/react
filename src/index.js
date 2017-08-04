import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import App from './containers/App';
import configureStore from './store/configureStore';
import Root from './components/Root';

const store = configureStore();

render(
	<Root store={store} />,
	document.getElementById('root')
);