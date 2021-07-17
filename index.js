import './polyfill';
import 'tippy.js/dist/tippy.css';
import '@/assets/style/custom.scss';
import '@/icons';

import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <h1>My React and TypeScript App!</h1>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);