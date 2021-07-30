import React from 'react';
import ReactDOM from 'react-dom';
import 'tippy.js/dist/tippy.css';
import '@/assets/style/custom.scss';

import {a} from './test';

a()

import App from '@/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
