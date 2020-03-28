// @flow
import React from 'react';
import {
  Image,
  Header,
} from 'semantic-ui-react';
import styled from 'styled-components/macro';

const logoHackathon = require('../../images/logo-wirvsvirus.png');

// TODO URI Locale?
// TODO URI GlobalMargin should be relocated when new layout exists?
const GlobalMargin = styled.div` 
  margin-left: 10rem;
`;

const ParagrahStyle = styled.p`
    width: 50%
`;

const About = () => {
  return (
    <span>
      <Header as="h1">About</Header>
      <GlobalMargin>
        <ParagrahStyle>
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

          <a
            href="https://wirvsvirushackathon.org/"
            title="#WirVsVirus Hackathon"
          >
            <Image
              src={logoHackathon}
              style={{ width: 250, marginBottom: '1rem' }}
              centered
            />
          </a>
        </ParagrahStyle>
      </GlobalMargin>
    </span>
  );
};

export default About;
