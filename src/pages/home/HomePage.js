// @flow
import React from 'react';
import styled from 'styled-components';
// import { Container, Header, Loader } from 'semantic-ui-react';
// import { useHistory, Link } from 'react-router-dom';
// import { useStateContext } from '../../state';

import { Grid } from 'semantic-ui-react';
import { blue } from '../../config/variables';
import {
  Hero,
  SearchBar,
  RecentGroups,
  About,
  Actions,
  Sponsors,
} from '../../components/Modules';

const StyledHomePage = styled.div`
.ui.button {
  margin-top: 1rem;
  border-radius: 10px;
  background-color: ${blue};
  border: 1px solid white;
  color: white;
  padding: 1.5rem;
}
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Grid columns={2} stackable centered>
        <Grid.Row>
          <Grid.Column>
            <Hero />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SearchBar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <RecentGroups />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <About />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Actions />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Sponsors />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </StyledHomePage>
  );
};

export default HomePage;
