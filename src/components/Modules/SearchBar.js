// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledSearchBar = styled.div``;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Container>
        <Header as="h2">SearchBar</Header>
      </Container>
    </StyledSearchBar>
  );
};

export default SearchBar;
