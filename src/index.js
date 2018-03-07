import React from 'react';
import ReactDOM from 'react-dom';
import Phone from './Phone';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal} from 'styled-components';

ReactDOM.render(<Phone />, document.getElementById('root'));
registerServiceWorker();


injectGlobal`
* {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
	box-sizing: border-box;
}
#root {
	height: 100vh;
	display:flex;
	align-items: center;
	justify-content: center;
	background: #f1f1f1;
}
`