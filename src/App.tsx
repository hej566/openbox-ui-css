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
import Popovers from './examples/Popovers';
import Progresses from './examples/Progresses';
import Toasts from './examples/Toasts';
import Tooltips from './examples/Tooltips';
import Checkboxes from './examples/Checkboxes';
import Radios from './examples/Radios';
import Switches from './examples/Switches';
import InputGroups from './examples/InputGroups';
import FormControls from './examples/FormControl';

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
          <li>
            <Link to="/popovers">Popovers</Link>
          </li>
          <li>
            <Link to="/progresses">Progresses</Link>
          </li>
          <li>
            <Link to="/toasts">Toasts</Link>
          </li>
          <li>
            <Link to="/tooltips">Tooltips</Link>
          </li>
          <li>
            <Link to="/checkboxes">Checkboxes</Link>
          </li>
          <li>
            <Link to="/radios">Radios</Link>
          </li>
          <li>
            <Link to="/switches">Switches</Link>
          </li>
          <li>
            <Link to="/input-groups">InputGroups</Link>
          </li>
          <li>
            <Link to="/form-control">FormControl</Link>
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
            <Route exact path="/popovers">
              <Popovers />
            </Route>
            <Route exact path="/progresses">
              <Progresses />
            </Route>
            <Route exact path="/toasts">
              <Toasts />
            </Route>
            <Route exact path="/tooltips">
              <Tooltips />
            </Route>
            <Route exact path="/checkboxes">
              <Checkboxes />
            </Route>
            <Route exact path="/radios">
              <Radios />
            </Route>
            <Route exact path="/switches">
              <Switches />
            </Route>
            <Route exact path="/input-groups">
              <InputGroups />
            </Route>
            <Route exact path="/form-control">
              <FormControls />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
