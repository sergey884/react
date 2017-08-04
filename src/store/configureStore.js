import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router-dom'
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	const logger = createLogger();
	const middleware = routerMiddleware(browserHistory);
	const store = createStore(
			rootReducer, 
			initialState,
				applyMiddleware(
					thunk,
					middleware,
					logger
				)
			);
	
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer);
		});
	}
  
	return store;
}