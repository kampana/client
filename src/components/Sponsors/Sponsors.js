// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Image } from 'semantic-ui-react';
import Netlify from './netlify.jpg';
import Slack from './slack.png';

const Container = styled.div`
  margin-top: 5rem;
`;

const listOfSponsors = [
  {
    name: 'Slack',
    image: Slack,
  },
  {
    name: 'Netlify',
    image: Netlify,
  },
];

const Sponsors = () => {
  return (
    <Container>
      <Header as={'h1'}>Supporters</Header>
      <Grid doubling columns={listOfSponsors.length}>
        {listOfSponsors.map((sponsor) => (
          <Grid.Column key={sponsor.name}>
            <Image src={sponsor.image} size={'medium'} circular />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default Sponsors;
