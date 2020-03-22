// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import CountryPage from './pages/country/CountryPage';
import GroupPage from './pages/group/GroupPage';

// TODO: Remove this temporary page
import WirvsvirushackPage from './pages/wirvsvirushack/WirvsvirushackPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/country/:countryId" component={CountryPage} />
          <Route exact path="/group/:groupId" component={GroupPage} />
          <Route exact path="/wirvsvirushack" component={WirvsvirushackPage} />
          <Route render={() => <div>404 not found</div>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
