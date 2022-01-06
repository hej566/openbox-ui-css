import React, { Suspense, lazy } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import ButtonsGroup from './examples/ButtonsGroup';
// import Accordions from './examples/Accordions';
// import Alerts from './examples/Alerts';
// import Badges from './examples/Badges';
// import Breadcrumbs from './examples/Breadcrumbs';
// import Carousels from './examples/Carousels';
// import Dropdowns from './examples/Dropdowns';
// import ListGroups from './examples/ListGroups';
// import Modals from './examples/Modals';
// import Navs from './examples/Navs';
// import Navbars from './examples/Navbars';
// import Offcanvases from './examples/Offcanvases';
// import Paginations from './examples/Paginations';
// import Placeholders from './examples/Placeholders';
// import Popovers from './examples/Popovers';
// import Progresses from './examples/Progresses';
// import Toasts from './examples/Toasts';
// import Tooltips from './examples/Tooltips';
// import Checkboxes from './examples/Checkboxes';
// import Radios from './examples/Radios';
// import Switches from './examples/Switches';
// import InputGroups from './examples/InputGroups';
// import FormControls from './examples/FormControl';
// import Ranges from './examples/Ranges';
// import Uploads from './examples/Uploads';
import Layout from './examples/Layout';
// import Home from './examples/Home';
const Buttons = lazy(() => import('./examples/Buttons'));
const Accordions = lazy(() => import('./examples/Accordions'));
const Alerts = lazy(() => import('./examples/Alerts'));
const Badges = lazy(() => import('./examples/Badges'));
const Breadcrumbs = lazy(() => import('./examples/Breadcrumbs'));
const Carousels = lazy(() => import('./examples/Carousels'));
const Dropdowns = lazy(() => import('./examples/Dropdowns'));
const ListGroups = lazy(() => import('./examples/ListGroups'));
const Modals = lazy(() => import('./examples/Modals'));
const Navs = lazy(() => import('./examples/Navs'));
const Navbars = lazy(() => import('./examples/Navbars'));
const Offcanvases = lazy(() => import('./examples/Offcanvases'));
const Paginations = lazy(() => import('./examples/Paginations'));
const Placeholders = lazy(() => import('./examples/Placeholders'));
const Popovers = lazy(() => import('./examples/Popovers'));
const Progresses = lazy(() => import('./examples/Progresses'));
const Toasts = lazy(() => import('./examples/Toasts'));
const Tooltips = lazy(() => import('./examples/Tooltips'));
const Checkboxes = lazy(() => import('./examples/Checkboxes'));
const Radios = lazy(() => import('./examples/Radios'));
const Switches = lazy(() => import('./examples/Switches'));
const InputGroups = lazy(() => import('./examples/InputGroups'));
const FormControls = lazy(() => import('./examples/FormControl'));
const Ranges = lazy(() => import('./examples/Ranges'));
const Uploads = lazy(() => import('./examples/Uploads'));
const Home = lazy(() => import('./examples/Home'));
const ButtonsGroup = lazy(() => import('./examples/ButtonsGroup'));

function App() {
  return (
    <Layout link={Link}>
      <Suspense
        fallback={
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100%' }}
          >
            loading
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
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
          <Route exact path="/breadcrumb">
            <Breadcrumbs />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
