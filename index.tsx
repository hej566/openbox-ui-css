import React from 'react';
import ReactDOM from 'react-dom';
import './polyfill';
import 'tippy.js/dist/tippy.css';
import '@/assets/style/custom.scss';
// import '@/icons';
import * as App from '@/App';

// const App: React.FC = (): JSX.Element => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(<App />, document.getElementById('app'));
