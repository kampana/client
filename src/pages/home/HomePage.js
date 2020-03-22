// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CountryList from '../../components/CountryList/CountryList';

const HomePage = () => {
  return (
    <Container>
      <Container>
        Click to see an <Link to="/country/1">example country page</Link>.
        <Header as="h1">Choose your country</Header>
        <CountryList />
      </Container>
    </Container>
  );
};

export default HomePage;
