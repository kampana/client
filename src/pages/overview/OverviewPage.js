// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CountryList from '../../components/CountryList/CountryList';

const OverviewPage = () => {
  return (
    <Container>
      Click to see an <Link to="/group/1">example detail page</Link>.
      <Header as="h1">Countries</Header>
      <CountryList />
    </Container>
  );
};

export default OverviewPage;
