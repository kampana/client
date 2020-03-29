// @flow
import React from 'react';
import styled from 'styled-components/macro';
import {
  Container,
  Header,
  Grid,
} from 'semantic-ui-react';
import About from '../About/About';

export const GlobalMargin = styled.div` 
  margin-left: 10rem;
`;

const Welcome = () => {
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">About</Header>
          </Grid.Column>
          <Grid.Column>
            <About />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Welcome;
