// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Layout from './components/Layout';
import OverviewPage from './pages/overview/OverviewPage';
import GroupDetailsPage from './pages/group-details/GroupDetailsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={OverviewPage} />
          <Route exact path="/group/:groupId" component={GroupDetailsPage} />
          <Route render={() => <div>404 not found</div>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
