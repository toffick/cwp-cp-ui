import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import UserActions from "./actions/UserActions";

import reducers from './reducers/index';
import './assets/loader';
import Routes from "./routes";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer,
	}), {},
	compose(
		applyMiddleware(middleware, thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	),
);

store.dispatch(UserActions.checkAuth());

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
