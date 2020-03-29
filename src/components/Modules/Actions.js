// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledActions = styled.div``;

const Actions = () => {
  return (
    <StyledActions>
      <Container>
        <Header as="h2">Actions</Header>
      </Container>
    </StyledActions>
  );
};

export default Actions;
