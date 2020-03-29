// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledAbout = styled.div``;

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Header as="h2">About</Header>
      </Container>
    </StyledAbout>
  );
};

export default About;
