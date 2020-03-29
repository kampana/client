// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHero = styled.div``;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Header as="h2">Hero</Header>
      </Container>
    </StyledHero>
  );
};

export default Hero;
