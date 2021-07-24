import React from 'react';
import ReactDOM from 'react-dom';
import './polyfill';
import 'tippy.js/dist/tippy.css';
import '@/assets/style/custom.scss';

import Hello from './src/App';

ReactDOM.render(<Hello />, document.getElementById('app'));
