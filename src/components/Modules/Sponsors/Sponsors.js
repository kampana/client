// @flow
import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import Slack from './slack.png';
import Netlify from './netlify.jpg';
import Aws from './aws.jpg';

const listOfSponsors = [
  {
    name: 'Slack',
    image: Slack,
  },
  {
    name: 'Netlify',
    image: Netlify,
  },
  {
    name: 'AWS',
    image: Aws,
  },
];

const StyledSponsors = styled.div``;

const Sponsors = () => {
  return (
    <StyledSponsors>
      <Container>
        <Header as="h2">Sponsors</Header>
        <Grid stackable centered columns={listOfSponsors.length}>
          <Grid.Row>
            {listOfSponsors.map((sponsor) => (
              <Grid.Column key={sponsor.name}>
                <Image src={sponsor.image} size={'small'} circular centered />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </StyledSponsors>
  );
};

export default Sponsors;
