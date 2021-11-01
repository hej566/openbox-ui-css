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
import Modals from './examples/Modals';
import Navs from './examples/Navs';
import Navbars from './examples/Navbars';
import Offcanvases from './examples/Offcanvases';
import Paginations from './examples/Paginations';
import Placeholders from './examples/Placeholders';

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
          <li>
            <Link to="/modals">Modals</Link>
          </li>
          <li>
            <Link to="/navs&tabs">Navs & Tabs</Link>
          </li>
          <li>
            <Link to="/navbars">Navbars</Link>
          </li>
          <li>
            <Link to="/offcanvases">Offcanvases</Link>
          </li>
          <li>
            <Link to="/paginations">Paginations</Link>
          </li>
          <li>
            <Link to="/placeholders">Placeholders</Link>
          </li>
        </ul>
        <hr />
        <div className="main">
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
            <Route exact path="/modals">
              <Modals />
            </Route>
            <Route exact path="/navs&tabs">
              <Navs />
            </Route>
            <Route exact path="/navbars">
              <Navbars />
            </Route>
            <Route exact path="/offcanvases">
              <Offcanvases />
            </Route>
            <Route exact path="/paginations">
              <Paginations />
            </Route>
            <Route exact path="/placeholders">
              <Placeholders />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
