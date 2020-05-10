import React from 'react';
import ReactDOM from 'react-dom';

import Store from './redux/Store.js';
import { Provider } from 'react-redux';

import './index.css'; //Base level csss
import App from './App'; //App is the container of all my components that entaer in DOM

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
); //Entry Point of react in the DOM
