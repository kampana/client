// @flow
import React from 'react';
import styled from 'styled-components';
// import { Container, Header, Loader } from 'semantic-ui-react';
// import { useHistory, Link } from 'react-router-dom';
// import { useStateContext } from '../../state';

import {
  Hero,
  SearchBar,
  RecentGroups,
  About,
  Actions,
  Sponsors,
} from '../../components/Modules';

const StyledHomePage = styled.div``;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Hero />

      <SearchBar />

      <RecentGroups />

      <About />

      <Actions />

      <Sponsors />
    </StyledHomePage>
  );
};

export default HomePage;
