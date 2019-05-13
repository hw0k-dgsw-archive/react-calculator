import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css';
import 'open-color/open-color.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
