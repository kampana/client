// @flow
import React from 'react';
import {
  Container,
  Grid,
  Image,
  List,
  Header,
  Button,
} from 'semantic-ui-react';

import styled from 'styled-components/macro';

const logoHackathon = require('../../images/logo-wirvsvirus.png');

const StyledFooter = styled.footer`
  margin: 3rem 0 0;
  padding: 3rem 0 5rem;
  background: #eeeeee;
  margin-top: 5rem;
  /* background: lightgray; */
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Grid columns={3} divided padded stackable>
          <Grid.Row>
            <Grid.Column>
              {/* <Header as="h3">#WirVsVirus</Header> */}
              <a
                href="https://wirvsvirushackathon.org/"
                title="#WirVsVirus Hackathon"
              >
                <Image
                  src={logoHackathon}
                  style={{ width: 250, marginBottom: '1rem' }}
                />
              </a>

              <p>
                CivicTechHub indexes and lists initiatives from more than 29
                countries to create visibility of social projects and activities
                like Covid-19 crisis-inspired hackathon{' '}
                <a href="https://wirvsvirushackathon.org/">#WirVsCorona</a>,
                government initiatives and local exchange groups.
              </p>
            </Grid.Column>

            <Grid.Column>
              <Header as="h3">The project</Header>
              <p>
                Want to find out more about CivicTechHub´s scope, how we built
                it and our amazing team? label Visit us on Devpost
              </p>
              <Button
                as="a"
                href="https://devpost.com/software/internationale-liste-covid-19-communities-hackathons"
              >
                Visit us on Devpost
              </Button>
            </Grid.Column>

            <Grid.Column>
              <Header as="h3">Join us on</Header>
              <List>
                <List.Item>
                  <List.Icon name="github" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://github.com/covid19-civictechTEAM">
                      Github
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="instagram" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://www.instagram.com/civictechhub/">
                      Instagram
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="youtube" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://www.youtube.com/channel/UCWjIvbOBLmToD4vrOHED89Q">
                      YouTube
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="slack" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://join.slack.com/t/covid-19civictech/shared_invite/zt-cz5jx2np-FweuQCaxTTZQUWW7a1GAyA">
                      Slack
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="globe" size="large" />
                  <List.Content verticalAlign="middle">
                    <a href="https://devpost.com/software/internationale-liste-covid-19-communities-hackathons">
                      Devpost
                    </a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
