// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Image } from 'semantic-ui-react';
import Netlify from './netlify.jpg';
import Slack from './slack.png';
import Aws from './aws.jpg';

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
  {
    name: 'AWS',
    image: Aws,
  },
];

const Supporters = () => {
  return (
    <Container>
      <Header as={'h1'}>Supporters</Header>
      <Grid stackable centered columns={listOfSponsors.length}>
        <Grid.Row>
          {listOfSponsors.map((sponsor) => (
            <Grid.Column key={sponsor.name}>
              <Image src={sponsor.image} size={'medium'} circular centered />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Supporters;
