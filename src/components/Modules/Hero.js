// @flow
import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHero = styled.div``;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Header as="h2">Hero</Header>

        <Button primary size="large">
          Primary Button
        </Button>
      </Container>
    </StyledHero>
  );
};

export default Hero;
