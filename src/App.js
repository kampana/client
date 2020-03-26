// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Button } from 'semantic-ui-react';

import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/home/HomePage';
import CountryPage from './pages/country/CountryPage';
import GroupPage from './pages/group/GroupPage';

// TODO: Remove this temporary page
import WirvsvirushackPage from './pages/wirvsvirushack/WirvsvirushackPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:countryId" component={CountryPage} />
          <Route exact path="/:countryId/:groupId" component={GroupPage} />
          <Route exact path="/wirvsvirushack" component={WirvsvirushackPage} />
          <Route
            render={() => (
              <Container style={{ padding: '4rem 0' }}>
                <Header
                  as="h1"
                  content="404"
                  subheader="Sorry, this site could not be found."
                />

                <Link to="/">
                  <Button>Back to home</Button>
                </Link>
              </Container>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
