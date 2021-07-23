import React from 'react';
import ReactDOM from 'react-dom';
import './polyfill';
import 'tippy.js/dist/tippy.css';
import '@/assets/style/custom.scss';

import App from './src/App';

ReactDOM.render(<App />, document.getElementById('app'));
