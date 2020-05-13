import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@components';
import * as serviceWorker from './serviceWorker';

import '@style/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
