// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Button } from 'semantic-ui-react';

const NoMatch = () => (
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
);

export default NoMatch;
