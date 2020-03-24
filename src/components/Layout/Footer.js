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
import packageJson from '../../../package.json';

const logoHackathon = require('../../images/logo-wirvsvirus.png');

const Version = styled.p`
  font-size: 0.9rem;
`;

const StyledFooter = styled.footer`
  margin: 3rem 0 0;
  margin-top: 5rem;
`;

const PrimaryFooter = styled.div`
  padding: 3rem 0;
  /* color: darkgray; */
  background: #eeeeee;
`;

const SecondaryFooter = styled.div`
  padding: 1.5rem 0 1.5rem;
  color: lightgray;
  background: #303030;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <PrimaryFooter>
        <Container>
          <Grid columns={3} divided stackable>
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
                  countries to create visibility of social projects and
                  activities like Covid-19 crisis-inspired hackathon{' '}
                  <a
                    href="https://wirvsvirushackathon.org/"
                    title="#WirVsVirus"
                  >
                    #WirVsVirus
                  </a>
                  , government initiatives and local exchange groups.
                </p>
              </Grid.Column>

              <Grid.Column>
                <Header as="h3">The project</Header>
                <p>
                  Want to find out more about CivicTechHub´s scope, how we built
                  it and our amazing team?
                </p>
                <Button
                  as="a"
                  href="https://devpost.com/software/internationale-liste-covid-19-communities-hackathons"
                >
                  Visit us on Devpost
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Header as="h3">Find us on</Header>
                <List>
                  <List.Item>
                    <List.Icon name="github" size="large" />
                    <List.Content verticalAlign="middle">
                      <a href="https://github.com/civictechhub">Github</a>
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
                      <a href="https://civictechhub.slack.com/join/shared_invite/zt-cz5jx2np-FweuQCaxTTZQUWW7a1GAyA">
                        Slack
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="twitter" size="large" />
                    <List.Content verticalAlign="middle">
                      <a href="https://twitter.com/civictechhub">Twitter</a>
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
      </PrimaryFooter>

      <SecondaryFooter>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width="6">
                <Version>Version {packageJson.version}</Version>
              </Grid.Column>
              <Grid.Column width="6" textAlign="right">
                Licensed under a{' '}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons Licence 3.0"
                >
                  Creative Commons Licence 3.0
                </a>
                .
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </SecondaryFooter>
    </StyledFooter>
  );
};

export default Footer;
