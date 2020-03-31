// @flow
import React from 'react';
import {
  Container,
  Grid,
} from 'semantic-ui-react';
import About from '../About/About';

const Welcome = () => {
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <About />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Welcome;
