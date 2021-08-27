import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buttons from './examples/Buttons';
import ButtonsGroup from './examples/ButtonsGroup';
import Accordion from './examples/Accordion';
import Alerts from './examples/Alerts';
import Badges from './examples/Badges';
import Breadcrumbs from './examples/Breadcrumb';

function App() {
  return (
    <Router>
      <div className="layout">
        <ul className="top-nav">
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/buttons-group">Buttons Group</Link>
          </li>
          <li>
            <Link to="/accordions">Accordion</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/badges">Badges</Link>
          </li>
          <li>
            <Link to="/breadcrumbs">Breadcrumbs</Link>
          </li>
        </ul>
        <hr />
        <div className="main bg-light">
          <Switch>
            <Route exact path="/buttons">
              <Buttons />
            </Route>
            <Route exact path="/buttons-group">
              <ButtonsGroup />
            </Route>
            <Route exact path="/accordions">
              <Accordion />
            </Route>
            <Route exact path="/alerts">
              <Alerts />
            </Route>
            <Route exact path="/badges">
              <Badges />
            </Route>
            <Route exact path="/breadcrumbs">
              <Breadcrumbs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
