import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from 'styled-components';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


injectGlobal`
	* {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		box-sizing: border-box;
	}
	html {
		background: #f1f1f1;
	}
`