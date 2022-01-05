import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import App from './App';
import './app.scss';

ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);
