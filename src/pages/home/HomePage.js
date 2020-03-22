// @flow
import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      Click to see an <Link to="/country/1">example country page</Link>.
    </Container>
  );
};

export default HomePage;
