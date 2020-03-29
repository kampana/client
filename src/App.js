// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import CountryPage from './pages/country/CountryPage';
import GroupPage from './pages/group/GroupPage';
import MarkdownPage from './pages/markdown/MarkdownPage';
import NoMatch from './pages/404';

// TODO: Remove this temporary page
import WirvsvirushackPage from './pages/wirvsvirushack/WirvsvirushackPage';
import WelcomePage from './pages/welcome/WelcomePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/country/:countryId(\d+)"
            component={CountryPage}
          />
          <Route exact path="/group/:groupId(\d+)" component={GroupPage} />
          {/* TODO: Create topic pages */}
          {/* <Route
            exact
            path="/topics/"
            component={TopicOverviewPage}
          /> */}
          {/* <Route
            exact
            path="/topic/:topicId"
            component={TopicPage}
          /> */}
          <Route exact path="/wirvsvirushack" component={WirvsvirushackPage} />
          <Route exact path="/getting-started" component={MarkdownPage} />
          <Route exact path="/welcome" component={WelcomePage} />
          <Route render={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
