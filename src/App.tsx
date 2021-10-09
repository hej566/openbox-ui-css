import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Buttons from './examples/Buttons';
import ButtonsGroup from './examples/ButtonsGroup';
import Accordions from './examples/Accordions';
import Alerts from './examples/Alerts';
import Badges from './examples/Badges';
import Breadcrumbs from './examples/Breadcrumbs';
import Carousels from './examples/Carousels';
import Dropdowns from './examples/Dropdowns';
import ListGroups from './examples/ListGroups';

function App() {
  return (
    <Router>
      <div className="layout">
        <ul className="top-nav">
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/buttons-group">Buttons group</Link>
          </li>
          <li>
            <Link to="/accordions">Accordions</Link>
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
          <li>
            <Link to="/carousels">Carousels</Link>
          </li>
          <li>
            <Link to="/dropdowns">Dropdowns</Link>
          </li>
          <li>
            <Link to="/list-group">List group</Link>
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
              <Accordions />
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
            <Route exact path="/carousels">
              <Carousels />
            </Route>
            <Route exact path="/dropdowns">
              <Dropdowns />
            </Route>
            <Route exact path="/list-group">
              <ListGroups />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
