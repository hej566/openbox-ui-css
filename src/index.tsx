import React from 'react';
import ReactDOM from 'react-dom';
import 'tippy.js/dist/tippy.css';
import '@/assets/style/custom.scss';

import Hello from './components/Hello';

ReactDOM.render(
  <Hello name="hejin" firstName="jin" lastName="he" />,
  document.getElementById('app')
);
