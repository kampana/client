// @flow
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledRecentGroups = styled.div``;

const RecentGroups = () => {
  return (
    <StyledRecentGroups>
      <Container>
        <Header as="h2">RecentGroups</Header>
      </Container>
    </StyledRecentGroups>
  );
};

export default RecentGroups;
