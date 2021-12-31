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
import Ranges from './examples/Ranges';
import Uploads from './examples/Uploads';
import Selects from './examples/Selects';
import Menus from './examples/Menus';
import Images from './examples/Images';
import Figures from './examples/Figures';
import Layout from './examples/Layout';

function App() {
  return (
    <Router>
      <Layout link={Link}>
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
          <Route exact path="/range">
            <Ranges />
          </Route>
          <Route exact path="/uploads">
            <Uploads />
          </Route>
          <Route exact path="/selects">
            <Selects />
          </Route>
          <Route exact path="/menus">
            <Menus />
          </Route>
          <Route exact path="/images">
            <Images />
          </Route>
          <Route exact path="/figures">
            <Figures />
          </Route>
          <Route exact path="/breadcrumb">
            <Breadcrumbs />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
